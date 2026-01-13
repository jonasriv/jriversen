'use client';

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
  const [imgLoaded, setImgLoaded] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Last inn modellen én gang
  useEffect(() => {
    let cancelled = false;

    const loadModel = async () => {
      setModelLoading(true);
      setError(null);

      try {
        // Prøv WebGL først (raskest), fallback til WASM hvis WebGL feiler.
        try {
          await tf.setBackend('webgl');
          await tf.ready();
        } catch (e) {
          console.warn('WebGL backend failed, falling back to WASM:', e);
          await tf.setBackend('wasm');
          await tf.ready();
        }

        const loadedModel = await cocoSsd.load();

        if (!cancelled) {
          setModel(loadedModel);
        }
      } catch (e) {
        console.error('Model load failed:', e);
        if (!cancelled) {
          setError('Kunne ikke laste modellen på denne enheten/nettleseren.');
          setModel(null);
        }
      } finally {
        if (!cancelled) setModelLoading(false);
      }
    };

    loadModel();

    return () => {
      cancelled = true;
    };
  }, []);

  const modelReady = !!model && !modelLoading && !error;

  // Capture bilde fra webcam
  const capture = useCallback(() => {
    setError(null);

    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setScreenshot(imageSrc);
      setPredictions([]);
      setImgLoaded(false); // viktig: reset så useEffect kan trigge detect når bildet er lastet
    }
  }, []);

  // Kjør detect når både modell + screenshot + imgLoaded er klare
  useEffect(() => {
    let cancelled = false;

    const detectImage = async () => {
      if (!model || !screenshot || !imgLoaded || !imgRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        const tempPredictions = await model.detect(imgRef.current);

        if (!cancelled) {
          setPredictions(tempPredictions);
        }
      } catch (e) {
        console.error('Detect failed:', e);
        if (!cancelled) {
          setError('Noe gikk galt under prediksjon på denne enheten.');
          setPredictions([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    detectImage();

    return () => {
      cancelled = true;
    };
  }, [model, screenshot, imgLoaded]);

  const reset = () => {
    setScreenshot(null);
    setPredictions([]);
    setImgLoaded(false);
    setIsLoading(false);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Modell-status */}
      {(modelLoading || error) && (
        <div className="mb-4 w-full max-w-md rounded-lg bg-white/60 p-3 text-sm text-black shadow">
          {modelLoading && <div>Laster AI-modell… (kan ta litt tid på mobil)</div>}
          {error && <div className="mt-2">{error}</div>}
        </div>
      )}

      {!screenshot ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            // For mobil: dette gjør ofte at man får riktig kamera / mindre trøbbel
            videoConstraints={{ facingMode: 'environment' }}
            width={640}
            height={480}
            className="rounded-lg shadow mb-4 max-w-full"
          />

          <button
            onClick={capture}
            disabled={!modelReady}
            className={`w-[70%] mt-8 px-4 py-2 rounded-2xl tracking-wider text-black dark:text-black
              ${
                modelReady
                  ? 'bg-white/50 hover:bg-white/60'
                  : 'bg-white/20 opacity-60 cursor-not-allowed'
              }`}
          >
            {modelReady ? 'Take picture' : 'Loading model…'}
          </button>
        </>
      ) : (
        <>
          <img
            ref={imgRef}
            src={screenshot}
            alt="Captured"
            className="w-auto h-auto rounded-lg shadow mb-4 max-w-full"
            onLoad={() => setImgLoaded(true)}
            onError={() => setError('Kunne ikke laste bildet (screenshot).')}
          />

          <button
            onClick={reset}
            className="w-[70%] mt-8 px-4 py-2 bg-white/50 hover:bg-white/60 rounded-2xl text-black dark:text-black tracking-wider"
          >
            New picture
          </button>
        </>
      )}

      {isLoading && <Loader />}

      {predictions.length > 0 && (
        <div className="mt-4 space-y-2 w-full max-w-md">
          {predictions.map((p, index) => (
            <div
              key={index}
              className="text-sm bg-white bg-opacity-75 p-2 rounded shadow dark:text-black"
            >
              <strong>{p.class}</strong>: {Math.round(p.score * 100)}%
            </div>
          ))}
        </div>
      )}

      {/* Valgfritt: Ingen treff */}
      {!isLoading && screenshot && imgLoaded && modelReady && predictions.length === 0 && (
        <div className="mt-4 text-sm bg-white/60 p-2 rounded shadow dark:text-black">
          Ingen objekter funnet (eller score under terskel).
        </div>
      )}
    </div>
  );
}
