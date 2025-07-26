import mongoose, { Schema, Document } from 'mongoose';

export interface CourseData extends Document {
  title: string;
  slug: string;
  description: string;
}

const CourseSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = mongoose.model<CourseData>('Course', CourseSchema);
