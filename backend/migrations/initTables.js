import pool from '../config/db.js';

const initTables = async () => {
  try {
    const connection = await pool.getConnection();

    // STUDENTS TABLE
    await connection.query(`
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        phone VARCHAR(15),
        profile_picture VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // COURSES TABLE
    await connection.query(`
      CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100),
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // ATTENDANCE TABLE
    await connection.query(`
      CREATE TABLE IF NOT EXISTS attendance (
        id INT AUTO_INCREMENT PRIMARY KEY,
        student_id INT,
        course_id INT,
        date DATE,
        status ENUM('Present', 'Absent') DEFAULT 'Present',
        FOREIGN KEY (student_id) REFERENCES students(id),
        FOREIGN KEY (course_id) REFERENCES courses(id)
      );
    `);

    // COURSE REGISTRATION TABLE
    await connection.query(`
      CREATE TABLE IF NOT EXISTS course_registration (
        id INT AUTO_INCREMENT PRIMARY KEY,
        student_id INT,
        course_id INT,
        registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      );
    `);

    // GRADES TABLE 
    await connection.query(`
      CREATE TABLE IF NOT EXISTS grades (
        id INT AUTO_INCREMENT PRIMARY KEY,
        student_id INT,
        course_id INT,
        test_name VARCHAR(100),
        score DECIMAL(5,2),
        grade VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
        FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      );
    `);

    connection.release();
    console.log('Tables created or already exist');
  } catch (err) {
    console.error('Error initializing tables:', err);
  }
};

export default initTables;
