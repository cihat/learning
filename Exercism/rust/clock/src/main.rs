
use clock::Clock;

fn main() {
    let clock1 = Clock::new(111, 30);
    println!("Clock 1: {}", clock1);

    let clock2 = clock1.add_minutes(45);
    println!("Clock 2: {}", clock2);
}
