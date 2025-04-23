'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Loader from './ui/Loader';
import Webcam from 'react-webcam';

export default function Predict() {    
    const webcamRef = useRef<Webcam>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [predictions, setPredictions] = useState<cocoSsd.DetectedObject[]>([]);
    const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    //Last inn modellen én gang
    useEffect(() => {
        const loadModel = async () => {
            await tf.setBackend('webgl');
            await tf.ready();
            const loadedModel = await cocoSsd.load();
            setModel(loadedModel);
        };
        loadModel();
      }, []);

    //Trykk på "capture" -->
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setScreenshot(imageSrc);
            setPredictions([]);
        }
    }, [webcamRef]);

    {/*}
    useEffect(() => {
        const detectImage = async () => {
            if (!model || !imgRef.current || !screenshot) return;
            setIsLoading(true);
            const tempPredictions = await model.detect(imgRef.current);
            setPredictions(tempPredictions);
            setIsLoading(false);
        };

        if (screenshot) {
            detectImage();
        }
    }, [screenshot, model]);
        */}
    
    return (
    
    <div className="flex flex-col items-center p-4">
        {!screenshot ? ( 
            <>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={640}
                    height={480}
                    className="rounded-lg shadow mb-4"
                />
                <button
                    onClick={capture}
                    className="w-[70%] mt-8 px-4 py-2 bg-white/50 hover:bg-white/60 rounded-2xl text-black dark:text-black tracking-wider"
                >
                 Take picture
                </button>
            </>
        ) : (
            <>
                <img 
                    ref={imgRef} 
                    src={screenshot} 
                    alt="Captured" 
                    className="w-auto h-auto rounded-lg shadow mb-4" 
                    onLoad={async () => {
                        if (!model || !imgRef.current) return;
                        setIsLoading(true);
                        const tempPredictions = await model.detect(imgRef.current);
                        setPredictions(tempPredictions);
                        setIsLoading(false);
                      }}
                />
                <button
                    onClick={() => {
                        setScreenshot(null);
                        setPredictions([]);
                    }}
                    className="w-[70%] mt-8 px-4 py-2 bg-white/50 hover:bg-white/60 rounded-2xl text-black dark:text-black tracking-wider"
                >
                    New picture
                </button>
            </>
            )}
            {isLoading && (
                <Loader/>
            )}
        {predictions.length > 0 && (
            <div className="mt-4 space-y-2">
            {predictions.map((p, index) => (
                <div key={index} className="text-sm bg-white bg-opacity-75 p-2 rounded shadow dark:text-black">
                    <strong>{p.class}</strong>: {Math.round(p.score * 100)}%
                </div>
          ))}
        </div>
      )}

    </div>
    )

}