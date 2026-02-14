import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #fce7f3, #e9d5ff, #dbeafe)',
      padding: '2rem'
    }}>
      
      {currentPage === 'welcome' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#ec4899',
            marginBottom: '1rem'
          }}>
            🌸 Happy Galentine's Day 2026! 🌸
          </h1>
          <p style={{
            fontSize: '2rem',
            color: '#9333ea',
            marginBottom: '2rem'
          }}>
            Celebrating friendship with my amazing squad!
          </p>
          <button 
            onClick={() => setCurrentPage('photos')}
            style={{
              backgroundColor: '#ec4899',
              color: 'white',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '1.5rem',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Let's Begin! 💖
          </button>
        </div>
      )}

      {currentPage === 'photos' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#ec4899',
            marginBottom: '2rem'
          }}>
            Our Memories Together 📸
          </h2>
          
          <img 
            src={photos[currentPhoto]} 
            alt={`Memory ${currentPhoto + 1}`}
            style={{
              maxWidth: '600px',
              width: '100%',
              borderRadius: '1rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          />
          <p style={{
            fontSize: '1.5rem',
            marginTop: '1rem',
            color: '#9333ea'
          }}>
            Memory {currentPhoto + 1} of {photos.length}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button 
              onClick={() => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)}
              style={{
                backgroundColor: '#a855f7',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              ← Previous
            </button>
            <button 
              onClick={() => setCurrentPhoto((prev) => (prev + 1) % photos.length)}
              style={{
                backgroundColor: '#a855f7',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Next →
            </button>
          </div>
          
          <button 
            onClick={() => setCurrentPage('certificate')}
            style={{
              marginTop: '2rem',
              backgroundColor: '#ec4899',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            See Your Surprise! 🎊
          </button>
        </div>
      )}

      {currentPage === 'certificate' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}>
          <div style={{
            backgroundColor: 'white',
            border: '8px solid #f9a8d4',
            borderRadius: '1rem',
            padding: '3rem',
            maxWidth: '700px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>💖</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '1.5rem' }}>
              Certificate of Friendship
            </h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>This certifies that</p>
            <p style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#9333ea',
              fontStyle: 'italic',
              borderBottom: '4px solid #f9a8d4',
              paddingBottom: '1rem',
              marginBottom: '1.5rem'
            }}>
              Our Amazing Squad
            </p>
            <p style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>is hereby declared as</p>
            <p style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '1.5rem' }}>
              🌟 BEST FRIENDS FOREVER! 🌟
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
              Awarded on Valentine's Day 2026
              <br />
              For: Being absolutely amazing!
            </p>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#9333ea' }}>
              💝 Friends Forever 💝
            </p>
          </div>
          
          <button 
            onClick={() => setCurrentPage('welcome')}
            style={{
              marginTop: '2rem',
              backgroundColor: '#ec4899',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Start Over 🔄
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
