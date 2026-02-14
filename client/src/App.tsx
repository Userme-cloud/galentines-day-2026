import React, { useState } from 'react';

function App() {
 const [currentPage, setCurrentPage] = useState('welcome');
const [quizScore, setQuizScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showQuizResult, setShowQuizResult] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
const [currentPhoto, setCurrentPhoto] = useState(0);
const [isFlipped, setIsFlipped] = useState(false);
  
  // ALL YOUR 33 PHOTOS WITH CAPTIONS!
  const photos = [
  { url: '/541749961_1270428264402870_4338543504354237540_n.jpg', caption: 'Best day ever!' },
  { url: '/543689345_2030718267670844_5418385007862742619_n.jpg', caption: 'Squad goals achieved!' },
  { url: '/546847128_791425020049287_1388363710216408772_n.jpg', caption: 'Memories that last forever' },
  { url: '/550368064_1596448261707740_8133934352831349380_n.jpg', caption: 'Always there for each other' },
  { url: '/550362490_1422415542170080_1684424970699660626_n.jpg', caption: 'Laughing until we cry' },
  { url: '/551089705_1472250943819646_5342578179922018963_n.jpg', caption: 'Making memories together' },
  { url: '/550678762_758632450322838_1473500143764211544_n.jpg', caption: 'Friends who became family' },
  { url: '/550783255_2268834293627287_3341855124901111834_n.jpg', caption: 'Adventure buddies for life' },
  { url: '/551828130_785709644043364_7888503967673962488_n.jpg', caption: 'Creating beautiful moments' },
  { url: '/551611027_966132142353224_7714324813231431692_n.jpg', caption: 'Together is our favorite place' },
  { url: '/518314551_1066183825605324_5749991094046228887_n.jpg', caption: 'Unforgettable times!' },
  { url: '/516480721_1066183745605332_8483761540227116112_n.jpg', caption: 'Pure happiness right here' },
  { url: '/518279252_1066183672272006_735818755434439562_n.jpg', caption: 'Weekend vibes with the squad' },
  { url: '/515733759_1066183625605344_1494488161959878841_n.jpg', caption: 'Making every moment count' },
  { url: '/516614201_1066183562272017_3814589223738549640_n.jpg', caption: 'Crazy, fun, amazing times!' },
  { url: '/518307628_1066183555605351_4416955914906369344_n.jpg', caption: 'Love you all so much!' },
  { url: '/517687219_1066183552272018_1577231689330763044_n.jpg', caption: 'Friendship at its finest' },
  { url: '/518007974_1066183588938681_7127943448635564324_n.jpg', caption: 'Living our best lives!' },
  { url: '/518586521_1066183492272024_8781615094106227115_n.jpg', caption: 'Forever grateful for you all' },
  { url: '/517983186_1066183545605352_5870268538359960344_n.jpg', caption: 'Squad up!' },
  { url: '/516528966_1066183402272033_2423274107681974307_n.jpg', caption: 'Besties for the resties!' },
  { url: '/518050141_1066183432272030_267057529981216243_n.jpg', caption: 'Creating magic together' },
  { url: '/517030276_1066183388938701_3745972283491345189_n.jpg', caption: 'These are the days!' },
  { url: '/518054799_1066183342272039_2682790775440414367_n.jpg', caption: 'Blessed with the best' },
  { url: '/517797843_1066183188938721_7034316572232202012_n.jpg', caption: 'Ride or die crew' },
  { url: '/516654641_1066183102272063_3674746320016245621_n.jpg', caption: 'Good times, great friends!' },
  { url: '/518162595_1066183185605388_5355400192366127147_n.jpg', caption: 'Together we shine brighter' },
  { url: '/518570570_1066183182272055_2473488701387096701_n.jpg', caption: 'Making memories that matter' },
  { url: '/516599984_1066183205605386_2068588359153918645_n.jpg', caption: 'Love this squad so much!' },
  { url: '/518277703_1066183075605399_7588031947211011811_n.jpg', caption: 'Friends who make life beautiful' },
  { url: '/517027002_1066183098938730_7322083557254597929_n.jpg', caption: 'Here to many more!' },
  { url: '/516731462_1066183055605401_4774286992561155608_n.jpg', caption: 'My favorite people!' },
  { url: '/516592533_1066183035605403_7796866707410455533_n.jpg', caption: 'Friendship goals achieved!' }
];


  // FRIENDSHIP QUIZ QUESTIONS
  const quizQuestions = [
    {
      question: "What's our favorite thing to do together?",
      options: ["Eat out 🍕", "Watch movies 🎬", "Go shopping 🛍️", "Take photos 📸"],
      correct: 0
    },
    {
      question: "Who's most likely to arrive late?",
      options: ["Friend A", "Friend B", "Friend C", "All of us 😂"],
      correct: 3
    },
    {
      question: "What's our go-to hangout spot?",
      options: ["Coffee shop ☕", "Mall 🏬", "Park 🌳", "Someone's house 🏠"],
      correct: 0
    },
    {
      question: "Which describes our friendship best?",
      options: ["Crazy & Fun 🎉", "Chill & Relaxed 😌", "Adventurous 🗺️", "All of the above! 💖"],
      correct: 3
    },
    {
      question: "What year did we become best friends?",
      options: ["2020", "2021", "2022", "Forever ago! ⏰"],
      correct: 3
    }
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // CONFETTI FUNCTION
  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) return;

      const particleCount = 3;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-10px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.backgroundColor = ['#ec4899', '#a855f7', '#f9a8d4', '#fbbf24'][Math.floor(Math.random() * 4)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        document.body.appendChild(particle);

        const duration = Math.random() * 3 + 2;
        particle.animate([
          { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        setTimeout(() => particle.remove(), duration * 1000);
      }

      requestAnimationFrame(frame);
    }());
  };

  // MUSIC PLAYER
  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // RUNNING NO BUTTON
  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 150);
    const newY = Math.random() * (window.innerHeight - 60);
    setNoButtonPosition({ x: newX, y: newY });
  };

  // QUIZ FUNCTIONS
  const handleQuizAnswer = (selectedIndex: number) => {
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
    
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowQuizResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setShowQuizResult(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #fce7f3, #e9d5ff, #dbeafe)',
      padding: '2rem',
      position: 'relative'
    }}>
      
      {/* MUSIC PLAYER BUTTON */}
      <audio id="bgMusic" loop>
        <source src="https://www.youtube.com/watch?v=fMhtX0JNGfg" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#ec4899',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 1000
        }}
      >
        {isPlaying ? '🔇' : '🎵'}
      </button>

      {/* WELCOME PAGE */}
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
            marginBottom: '1rem',
            animation: 'bounce 1s infinite'
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
            onClick={() => setCurrentPage('question')}
            style={{
              backgroundColor: '#ec4899',
              color: 'white',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '1.5rem',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            Let's Begin! 💖
          </button>
        </div>
      )}

      {/* RUNNING NO BUTTON PAGE */}
      {currentPage === 'question' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#ec4899',
            marginBottom: '3rem'
          }}>
            Are you my BFF forever? 💕
          </h2>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <button 
              onClick={() => {
                triggerConfetti();
                setTimeout(() => setCurrentPage('photos'), 1000);
              }}
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                fontWeight: 'bold',
                padding: '1rem 3rem',
                borderRadius: '9999px',
                fontSize: '1.5rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              YES! 💖
            </button>
            
            <button 
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                position: noButtonPosition.x === 0 ? 'relative' : 'fixed',
                left: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.x}px`,
                top: noButtonPosition.x === 0 ? 'auto' : `${noButtonPosition.y}px`,
                backgroundColor: '#ef4444',
                color: 'white',
                fontWeight: 'bold',
                padding: '1rem 3rem',
                borderRadius: '9999px',
                fontSize: '1.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: noButtonPosition.x === 0 ? 'none' : 'all 0.3s ease'
              }}
            >
              No 😢
            </button>
          </div>
        </div>
      )}

     {/* PHOTO GALLERY PAGE WITH FLIP CARD */}
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
      marginBottom: '1rem'
    }}>
      Our Memories Together 📸
    </h2>
    
    <p style={{
      fontSize: '1.2rem',
      color: '#9333ea',
      marginBottom: '2rem'
    }}>
      Click the photo to flip and see the message! ✨
    </p>
    
    <div 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        width: '600px',
        maxWidth: '90%',
        height: '600px',
        perspective: '1000px',
        cursor: 'pointer'
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}>
        {/* FRONT - Photo */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          <img 
            src={photos[currentPhoto].url} 
            alt={`Memory ${currentPhoto + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* BACK - Caption */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          backgroundColor: '#fce7f3',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          border: '4px solid #f9a8d4'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>💖</div>
          <p style={{
            fontSize: '2rem',
            color: '#ec4899',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            {photos[currentPhoto].caption}
          </p>
          <p style={{
            fontSize: '1.2rem',
            color: '#9333ea',
            textAlign: 'center'
          }}>
            Memory {currentPhoto + 1} of {photos.length}
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#a855f7',
            marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            Click to flip back! ✨
          </p>
        </div>
      </div>
    </div>
    
    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
          setIsFlipped(false);
        }}
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
        onClick={(e) => {
          e.stopPropagation();
          setCurrentPhoto((prev) => (prev + 1) % photos.length);
          setIsFlipped(false);
        }}
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
      onClick={() => setCurrentPage('quiz')}
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
      Take the Friendship Quiz! 🎮
    </button>
  </div>
)}


      {/* QUIZ PAGE */}
      {currentPage === 'quiz' && !showQuizResult && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ec4899',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Friendship Quiz! 🎯
          </h2>
          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            maxWidth: '600px',
            width: '100%'
          }}>
            <p style={{
              fontSize: '1.2rem',
              color: '#6b7280',
              marginBottom: '1rem'
            }}>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
            
            <h3 style={{
              fontSize: '1.8rem',
              color: '#9333ea',
              marginBottom: '2rem'
            }}>
              {quizQuestions[currentQuestion].question}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  style={{
                    backgroundColor: '#f3e8ff',
                    color: '#7c3aed',
                    fontWeight: 'bold',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #a855f7',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e9d5ff';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3e8ff';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* QUIZ RESULT PAGE */}
      {currentPage === 'quiz' && showQuizResult && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#ec4899',
            marginBottom: '2rem'
          }}>
            Quiz Complete! 🎉
          </h2>
          
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <p style={{ fontSize: '2rem', color: '#9333ea', marginBottom: '1rem' }}>
              Your Score:
            </p>
            <p style={{ fontSize: '4rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '1rem' }}>
              {quizScore} / {quizQuestions.length}
            </p>
            <p style={{ fontSize: '1.5rem', color: '#6b7280' }}>
              {quizScore === quizQuestions.length ? "Perfect! You know us so well! 💖" :
               quizScore >= 3 ? "Great job! True friendship! 🌟" :
               "We need more hangout time! 😊"}
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button 
              onClick={resetQuiz}
              style={{
                backgroundColor: '#a855f7',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Try Again 🔄
            </button>
            <button 
              onClick={() => setCurrentPage('certificate')}
              style={{
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
        </div>
      )}

      {/* CERTIFICATE PAGE */}
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
            onClick={() => {
              triggerConfetti();
            }}
            style={{
              marginTop: '2rem',
              backgroundColor: '#10b981',
              color: 'white',
              fontWeight: 'bold',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem'
            }}
          >
            🎉 Celebrate! 🎉
          </button>
          
          <button 
            onClick={() => setCurrentPage('welcome')}
            style={{
              marginTop: '1rem',
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
