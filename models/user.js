import mongoose from "mongoose";
const { Schema } = mongoose;
const schema = new Schema({
    Title: {
        type: String,
        required: [true, "Please add a title"],
        minlength: [3, 'Title must be at least 5 characters'],
        maxlength: [100]
    },
    Description: {
        type: String,
        required: [true, "Please add a Description"],
        minlength: [3, 'Title must be at least 5 characters'],
        maxlength: [500]
    },
    image: {
        public_id: {
            type: String
        },
        url: {
            type: String
        }
    },
    video: {
        public_id: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        }
    }
});

export default mongoose.model('User', schema);

