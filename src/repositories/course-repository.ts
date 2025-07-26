import { Course, CourseData } from '../models/course-model';

exports.getAllCourses = async () => {
  return await Course.find();
};

exports.getCourseBySlug = async (slug: string) => {
  return await Course.find({ slug });
};

exports.addCourse = async (data: Partial<CourseData>) => {
  return await Course.create(data);
};

exports.updateCourse = async (slug: string, data: Partial<CourseData>) => {
  return await Course.updateOne({ slug }, data);
};

exports.deleteCourse = async (slug: string) => {
  return await Course.deleteOne({ slug });
};
