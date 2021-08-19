import * as mongoose from 'mongoose';
import PostModel from "../models/postModel";
import DbUtil from "../utill/dbUtil";
import { Document } from "mongoose";

export interface PostDocument extends PostModel, Document {
}

const postSchema = new mongoose.Schema({
    accelerometerX: {
        type: String
    },
    accelerometerY: {
        type: String
    },
    accelerometerZ: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<PostDocument>(
    DbUtil.POST,
    postSchema
);