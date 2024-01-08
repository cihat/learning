use std::fmt;

const DAY: i64 = 24 * 60;
const HOUR: i64 = 60;

#[derive(Debug, Eq, PartialEq)]
pub struct Clock {
  minitus: i64,
}

impl Clock {
  pub fn new(hours: i64, minutes: i64) -> Self {
    Clock {
      minitus: (((hours * HOUR + minutes) % DAY) + DAY) % DAY,
    }
  }

  pub fn add_minutes(&self, minutes: i64) -> Self {
    Clock::new(0, self.minitus + minutes)
  }
}

impl fmt::Display for Clock {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
    write!(f, "{:02}:{:02}", self.minitus / HOUR, self.minitus % HOUR)
  }
}
