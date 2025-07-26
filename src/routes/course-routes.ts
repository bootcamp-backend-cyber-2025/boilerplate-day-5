const router = require('express').Router();

const authenticationMiddleware = require('../middlewares/authentication-middleware');
const courseController = require('../controllers/course-controller');

// GET /api/courses/enrolled
router.get(
  '/enrolled',
  authenticationMiddleware,
  courseController.enrolledCourses,
);

module.exports = router;
