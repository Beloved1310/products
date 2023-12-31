import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  image: string;
  cloudinary_id: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductSchema: Schema = new Schema(
  {
    image: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);
export default  mongoose.model('Product', ProductSchema);
