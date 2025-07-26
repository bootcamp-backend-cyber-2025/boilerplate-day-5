import { Course, CourseData } from '../models/course-model';

const courseRepository = require('../repositories/course-repository');

// dapatkan semua kursus
exports.getAllCourses = async () => {
  return await courseRepository.getAllCourses();
};

// dapatkan kursus dari slug
exports.getCourseBySlug = async (slug: string) => {
  const courses = await courseRepository.getCourseBySlug(slug);

  // cek 'falsy'
  if (!courses || courses.length === 0) {
    return null;
  }

  return courses;
};

// menambahkan kursus baru
exports.addCourse = async (data: Partial<CourseData>) => {
  return await courseRepository.addCourse(data);
};

// mengubah kursus
exports.updateCourse = async (slug: string, data: Partial<CourseData>) => {
  return await courseRepository.updateCourse(slug, data);
};

// menghapus kursus
exports.deleteCourse = async (slug: string) => {
  return await courseRepository.deleteCourse(slug);
};
