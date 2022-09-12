import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { ImageProcessing, ImageProcessingDocument } from './schemas/imageProcessing.schema';

@Injectable()
export class ImageProcessingService {
  constructor(@InjectModel(ImageProcessing.name) private ImageProcessingModel: Model<ImageProcessingDocument>) {}

  async upDateborderColor(instaId: string) {
    //flask 서버에 cluster 결과 요청
    console.log(instaId);
    const colorData = await this.getClusterColor(instaId);
    //[ [] [] [] ] 이중배열 parseInt 처리 + rgb값 hex값으로 변환

    if (colorData[0]['error']) {
      return 'error';
    } else {
      const borderColorData: string[] = colorData.map((data, i) => {
        const rgbArray = data['color'].map(color => parseInt(color));
        const clusterOrder = i;
        const hex = this.RGBToHex(rgbArray);
        const lightNess = this.RGBToLightNess(rgbArray);
        return {
          clusterOrder,
          hex,
          lightNess,
        };
      });
      try {
        // console.log(await this.ImageProcessingModel.updateOne({ instaId }, { $set: { borderColor: borderColorData } }));
      } catch (error) {
        console.log(error);
      }
      return 'success';
    }
  }

  async getClusterColor(id: string): Promise<any> {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://127.0.0.1:5002/ImageProcessing?id=${id}`,
      });
      const { data } = response;
      data.sort((a, b) => {
        if (a.hist < b.hist) {
          return 1;
        }
        if (a.hist > b.hist) {
          return -1;
        }
        return 0;
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  RGBToHex(rgbArray: number[]): string {
    const [r, g, b] = rgbArray;
    let [rHex, gHex, bHex] = [r.toString(16), g.toString(16), b.toString(16)];

    if (rHex.length == 1) rHex = '0' + rHex;
    if (gHex.length == 1) gHex = '0' + gHex;
    if (bHex.length == 1) bHex = '0' + bHex;

    return '#' + rHex + gHex + bHex;
  }

  RGBToLightNess(rgbArray: number[]): number {
    const [r, g, b] = rgbArray;
    const HSLData = [r / 255, g / 255, b / 255];
    const [min, mid, max] = HSLData.sort();
    return (min + max) / 2;
  }
  brightnessCompare(grayArray: number[]): [string, string] {
    return ['', ''];
  }
}
