const
  //object sizes
  GAME_HEIGHT = 800,
  GAME_WIDTH = 1000,
  BLOCK_SIZE = 25,
  //map objects
  EMPTY = 0,
  WALL = 1,
  UP_SPIKE = 2,
  RIGHT_SPIKE = 3,
  DOWN_SPIKE = 4,
  LEFT_SPIKE = 5,
  //game states
  GAME_PLAYING = 0,
  GAME_MENU = 1,
  GAME_PAUSED = 2,
  GAME_FROZEN = 3,
  GAME_DEAD = 4,
  //player states
  //  animation
  IDLE_ANIMATION = 1,
  LEANING_IDLE_ANIMATION = 2,
  WALK_ANIMATION = 3,
  LEANING_WALK_ANIMATION = 4,
  //  walk
  PLAYER_STILL = 1,
  PLAYER_WALK = 2,
  PLAYER_DASH = 3,
  //  fall
  PLAYER_GROUNDED = 1,
  PLAYER_FALL = 2,
  PLAYER_FAST_FALL = 3,
  PLAYER_JUMP = 4,
  //player math
  GRAVITY = 0.6,
  MAX_FALL_SPEED = 9,
  MAX_FAST_FALL_SPEED = 12,
  JUMP_SPEED = -7,
  JUMP_DEC_SPEED = 0.25,
  WALK_ACC_SPEED = 1,
  WALK_SPEED = 5,
  GROUND_FRICTION = 0.8,
  AIR_FRICTION = 0.9,
  JUMP_TIME = 10,
  JUMP_BUFFER_TIME = 5,
  DASH_SPEED = 20,
  DASH_END_FRICTION = 0.4
  DASH_TIME = 3,
  DASH_REFILL_TIME = 5,
  DASH_COOLDOWN_TIME = 15,
  CORNER_CORRECTION = 3,
  DASH_CORNER_CORRECTION = 5,
  //general movement
  UP = 1,
  UP_RIGHT = 2,
  RIGHT = 3,
  DOWN_RIGHT = 4,
  DOWN = 5,
  DOWN_LEFT = 6,
  LEFT = 7,
  UP_LEFT = 8,
  //math constants
  SQRT1_5 = 1 / Math.sqrt(5),
  SQRT1_2 = Math.SQRT1_2