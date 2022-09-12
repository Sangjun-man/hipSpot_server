import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ImageProcessingDocument = ImageProcessing & Document;

@Schema({ collection: 'ImageProcessing' })
export class ImageProcessing {
  @Prop(Number)
  id: number;

  @Prop(String)
  instaId: string;

  @Prop([Object])
  borderColor: Array<{
    clusterOrder: number;
    hex: string;
    // color: string;
    // stroke: string;
    lightNess: number;
    gray: string;
  }>;

  @Prop([String])
  fontColorData: string[];
}

export const ImageProcessingSchema = SchemaFactory.createForClass(ImageProcessing);
