new Vue({
    el: '#app',
    data: {
        score: 0,
        lives: 3,
        spaceshipX: 175,
        spaceshipY: 550,
        bullets: [],
        circles: [],
        intervalId: null,
        gameStarted: false,
        keysPressed: {
            'ArrowLeft': false,
            'ArrowRight': false,
            'ArrowUp': false,
            'ArrowDown': false,
            'KeyK': false
        },
        elapsedTime: 0,
        maxCircles: 3, 
        currentMaxCircles: 3, 
    },
    methods: {
         startGame() {
            if (!this.gameStarted) {
                this.gameStarted = true;
                this.intervalId = setInterval(() => {
                    this.createCircle();
                    this.moveCircles();
                    this.checkCollision();
                }, 10000);
                
                setInterval(() => {
                    this.createCircle();
                }, 5000); // Add one more ball every set of time
            }
        },
        updateScoreboard() {
            // Update the score and lives based on the game state
            document.querySelector('.score').innerText = 'Score: ' + this.score;
            document.querySelector('.lives').innerText = 'Lives: ' + this.lives;
        },
        moveSpaceship() {
            if (this.gameStarted) {
                if (this.keysPressed['KeyW'] && this.spaceshipY > 0) {
                    this.spaceshipY -= 4.5;
                }
                if (this.keysPressed['KeyA'] && this.spaceshipX > 25) {
                    this.spaceshipX -= 4.5;
                }
                if (this.keysPressed['KeyD'] && this.spaceshipX < 375) {
                    this.spaceshipX += 4.5;
                }
                if (this.keysPressed['KeyS'] && this.spaceshipY < 550) {
                    this.spaceshipY += 4.5;
                }
            }
        },
        shoot() {
            if (this.gameStarted && this.keysPressed['KeyK']) {
                const bullet = {
                    x: this.spaceshipX + 25, // Position at the center of the spaceship
                    y: this.spaceshipY,
                    speed: 5
                };
                this.bullets.push(bullet);
            }
        },
        drawBullets(context) {
            this.circles.forEach(circle => {
                context.fillStyle = circle.color; // Use the asteroid's color
                context.beginPath();
                context.arc(circle.x, circle.y, 10, 0, Math.PI * 2); // Draw a circle for each asteroid
                context.fill();
                context.closePath();
            });
        },
        createCircle() {
                if (this.gameStarted && this.circles.length < this.currentMaxCircles) {
                    let color;
                    do {
                        color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
                    } while (this.circles.some(circle => circle.color === color)); // Check if color already exists

                    const circle = {
                        x: Math.random() * 375,
                        y: -50,
                        speed: Math.random() * 3 + 1,
                        color: color
                    };
                    this.circles.push(circle);
                }
            },
        increaseMaxCircles() {
            this.currentMaxCircles++; 
        },
        moveCircles() {
            if (this.gameStarted) {
                this.circles.forEach(circle => {
                    circle.y += circle.speed;
                });
            }
        },
        checkCollision() {
            if (this.gameStarted) {
                this.circles.forEach((circle, circleIndex) => {
                    // Adjust the collision box by adding an offset to this.spaceshipY
                    const distance = Math.sqrt((circle.x - this.spaceshipX) ** 2 + (circle.y - (this.spaceshipY + 25)) ** 2);
                    if (distance < 25) {
                        this.circles.splice(circleIndex, 1);
                        this.lives--;
                        if (this.lives <= 0) {
                            this.endGame();
                        }
                    } else if (circle.y > 600) {
                        this.circles.splice(circleIndex, 1);
                        this.score++;
                    }

                    this.bullets.forEach((bullet, bulletIndex) => {
                        const bulletDistance = Math.sqrt((circle.x - bullet.x) ** 2 + (circle.y - bullet.y) ** 2);
                        if (bulletDistance < 25) {
                            this.circles.splice(circleIndex, 1);
                            this.bullets.splice(bulletIndex, 1);
                            this.score++;
                        }
                    });
                });
            }
        },
        endGame() {
            clearInterval(this.intervalId);
            this.gameStarted = false;
            alert('Game Over. Your score is ' + this.score);
            this.score = 0;
            this.lives = 3;
            this.circles = [];
            this.bullets = [];
        }
    },
    mounted() {
        const canvas = document.getElementById('gameCanvas');
        const context = canvas.getContext('2d');

        window.addEventListener('keydown', (event) => {
            if (['KeyW', 'KeyA', 'KeyD', 'KeyS', 'KeyK'].includes(event.code)) {
                event.preventDefault(); // Prevent default behavior (e.g., scrolling)
                this.keysPressed[event.code] = true;
            }
        });

        window.addEventListener('keyup', (event) => {
            if (['KeyW', 'KeyA', 'KeyD', 'KeyS', 'KeyK'].includes(event.code)) {
                this.keysPressed[event.code] = false;
            }
        });

        setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            this.createCircle();
            this.moveCircles();
            this.checkCollision();
            this.moveSpaceship(); // Move the spaceship
            this.drawBullets(context); // Draw the bullets
        }, 1000 / 60); // 60 FPS
        
        setInterval(() => {
            this.increaseMaxCircles();
        }, 3000); // Increase the maximum number of circles every 3 seconds
    }
});