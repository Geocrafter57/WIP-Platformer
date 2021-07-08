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
  PLAYER_WALK_ACC = 2,
  PLAYER_WALK = 3,
  PLAYER_WALK_DEC = 4,
  PLAYER_DASH = 5,
  //  fall
  PLAYER_GROUNDED = 1,
  PLAYER_FALL = 2,
  PLAYER_FAST_FALL = 3,
  PLAYER_JUMP = 4,
  PLAYER_CANCEL_JUMP = 5,
  //player math
  GRAVITY = 0.8,
  MAX_FALL_SPEED = 8,
  MAX_FAST_FALL_SPEED = 10,
  JUMP_SPEED = -9,
  JUMP_DEC_SPEED = 0.3,
  WALK_ACC_SPEED = 1,
  WALK_SPEED = 5,
  WALK_DEC_SPEED = 0.4,
  GROUND_FRICTION = 0.4,
  AIR_FRICTION = 0.7,
  JUMP_TIME = 10,
  JUMP_BUFFER_TIME = 5,
  DASH_SPEED = 20,
  DASH_DEC_SPEED = 10,
  DASH_TIME = 3,
  DASH_REFILL_TIME = 5,
  DASH_COOLDOWN_TIME = 15,
  CORNER_CORRECTION = 2,
  DASH_CORNER_CORRECTION = 3,
  //general movement
  UP = 1,
  UP_RIGHT = 2,
  RIGHT = 3,
  DOWN_RIGHT = 4,
  DOWN = 5,
  DOWN_LEFT = 6,
  LEFT = 7,
  UP_LEFT = 8