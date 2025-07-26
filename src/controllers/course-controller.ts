import { Response } from 'express';
import { AuthenticatedRequest } from '../types/authenticated-request-type';

const courseService = require('../services/course-service');

// mendapatkan list kursus yang diikuti pengguna
exports.enrolledCourses = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const enrolledCourses = courseService.getEnrolledCourse();

    if (!enrolledCourses || enrolledCourses.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Data kursus yang diikuti kosong!',
      });
    }

    return res.status(200).json({
      statusCode: 200,
      message: 'Sukses mendapatkan kursus yang diikuti!',
      data: enrolledCourses,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      message: 'Error internal server!',
    });
  }
};
