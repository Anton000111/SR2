const writeLine = require('./write_line');
const clear = require('./clear');
const colors = require('./colors');

const SR2_FRAME = `
███████╗██████╗ ██████╗ 
██╔════╝██╔══██╗╚════██╗
███████╗██████╔╝ █████╔╝
╚════██║██╔══██╗██╔═══╝ 
███████║██║  ██║███████╗
╚══════╝╚═╝  ╚═╝╚══════╝
`;

const createProgressiveFrames = (fullFrame) => {
  const lines = fullFrame.trim().split('\n');
  const maxLength = Math.max(...lines.map(line => line.length));
  const frames = [];
  
  for (let charIndex = 1; charIndex <= maxLength; charIndex++) {
    const frame = lines.map(line => line.substring(0, charIndex)).join('\n');
    frames.push(frame);
  }
  
  return frames;
};

const WELCOME_FRAMES = createProgressiveFrames(SR2_FRAME);

const showWelcomeAnimation = async () => {
  return new Promise((resolve) => {
    let currentFrame = 0;
    
    const animate = () => {
      clear();
      
      // Split the frame into lines and render each one
      const frameLines = WELCOME_FRAMES[currentFrame].trim().split('\n');
      frameLines.forEach(line => {
        writeLine(colors.green(line));
      });
      
      currentFrame++;
      
      if (currentFrame < WELCOME_FRAMES.length) {
        setTimeout(animate, 30);
      } else {
        // Show final frame for a bit longer
        setTimeout(() => {
          clear();
          resolve();
        }, 500);
      }
    };
    
    animate();
  });
};

module.exports = {
  showWelcomeAnimation,
  WELCOME_FRAMES
};
