import React, { useState } from 'react';
import { FloatingHearts } from './FloatingHearts';
import { PolaroidCard } from './PolaroidCard';
import { Navigation } from './Navigation';
import { PageTransition } from './PageTransition';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  
  // ALL YOUR 33 PHOTOS!
  const photos = [
    '/541749961_1270428264402870_4338543504354237540_n.jpg',
    '/543689345_2030718267670844_5418385007862742619_n.jpg',
    '/546847128_791425020049287_1388363710216408772_n.jpg',
    '/550368064_1596448261707740_8133934352831349380_n.jpg',
    '/550362490_1422415542170080_1684424970699660626_n.jpg',
    '/551089705_1472250943819646_5342578179922018963_n.jpg',
    '/550678762_758632450322838_1473500143764211544_n.jpg',
    '/550783255_2268834293627287_3341855124901111834_n.jpg',
    '/551828130_785709644043364_7888503967673962488_n.jpg',
    '/551611027_966132142353224_7714324813231431692_n.jpg',
    '/518314551_1066183825605324_5749991094046228887_n.jpg',
    '/516480721_1066183745605332_8483761540227116112_n.jpg',
    '/518279252_1066183672272006_735818755434439562_n.jpg',
    '/515733759_1066183625605344_1494488161959878841_n.jpg',
    '/516614201_1066183562272017_3814589223738549640_n.jpg',
    '/518307628_1066183555605351_4416955914906369344_n.jpg',
    '/517687219_1066183552272018_1577231689330763044_n.jpg',
    '/518007974_1066183588938681_7127943448635564324_n.jpg',
    '/518586521_1066183492272024_8781615094106227115_n.jpg',
    '/517983186_1066183545605352_5870268538359960344_n.jpg',
    '/516528966_1066183402272033_2423274107681974307_n.jpg',
    '/518050141_1066183432272030_267057529981216243_n.jpg',
    '/517030276_1066183388938701_3745972283491345189_n.jpg',
    '/518054799_1066183342272039_2682790775440414367_n.jpg',
    '/517797843_1066183188938721_7034316572232202012_n.jpg',
    '/516654641_1066183102272063_3674746320016245621_n.jpg',
    '/518162595_1066183185605388_5355400192366127147_n.jpg',
    '/518570570_1066183182272055_2473488701387096701_n.jpg',
    '/516599984_1066183205605386_2068588359153918645_n.jpg',
    '/518277703_1066183075605399_7588031947211011811_n.jpg',
    '/517027002_1066183098938730_7322083557254597929_n.jpg',
    '/516731462_1066183055605401_4774286992561155608_n.jpg',
    '/516592533_1066183035605403_7796866707410455533_n.jpg'
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <FloatingHearts />
     
      
      {/* WELCOME PAGE */}
      {currentPage === 'welcome' && (
        <PageTransition>
          <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
            <h1 className="text-6xl font-bold text-pink-600 mb-4 animate-bounce">
              🌸 Happy Galentine's Day 2026! 🌸
            </h1>
            <p className="text-2xl text-purple-600 mb-8">
              Celebrating friendship with my amazing squad!
            </p>
            <button 
              onClick={() => setCurrentPage('photos')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition"
            >
              Let's Begin! 💖
            </button>
          </div>
        </PageTransition>
      )}

      {/* PHOTO GALLERY PAGE */}
      {currentPage === 'photos' && (
        <PageTransition>
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h2 className="text-4xl font-bold text-pink-600 mb-8">Our Memories Together 📸</h2>
            
            <PolaroidCard 
              imageUrl={photos[currentPhoto]} 
              caption={`Memory ${currentPhoto + 1} of ${photos.length}`}
            />
            
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full"
              >
                ← Previous
              </button>
              <button 
                onClick={() => setCurrentPhoto((prev) => (prev + 1) % photos.length)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full"
              >
                Next →
              </button>
            </div>
            
            <button 
              onClick={() => setCurrentPage('certificate')}
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
            >
              See Your Surprise! 🎊
            </button>
          </div>
        </PageTransition>
      )}

      {/* CERTIFICATE PAGE */}
      {currentPage === 'certificate' && (
        <PageTransition>
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="bg-white border-8 border-pink-400 rounded-lg p-12 max-w-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">💖</div>
                <h1 className="text-5xl font-bold text-pink-600 mb-6">Certificate of Friendship</h1>
                <p className="text-xl mb-6">This certifies that</p>
                <p className="text-4xl font-bold text-purple-600 italic border-b-4 border-pink-400 pb-4 mb-6">
                  Our Amazing Squad
                </p>
                <p className="text-2xl mb-4">is hereby declared as</p>
                <p className="text-3xl font-bold text-pink-600 mb-6">
                  🌟 BEST FRIENDS FOREVER! 🌟
                </p>
                <p className="text-lg mb-8">
                  Awarded on Valentine's Day 2026
                  <br />
                  For: Being absolutely amazing!
                </p>
                <p className="text-xl italic text-purple-600">💝 Friends Forever 💝</p>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentPage('welcome')}
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full"
            >
              Start Over 🔄
            </button>
          </div>
        </PageTransition>
      )}
    </div>
  );
}

export default App;
