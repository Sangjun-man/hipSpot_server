import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PlaceService } from 'src/place/place.service';
import { PlaceDocument } from 'src/place/schemas/place.schema';

@Injectable()
export class ImageService {
  constructor(private readonly httpService: HttpService, private readonly placeService: PlaceService) {}

  async upDateborderColor(instaId: string) {
    //flask 서버에 cluster 결과 요청
    console.log(instaId);
    const colorData = await this.getClusterColor(instaId);
    //[ [] [] [] ] 이중배열 parseInt 처리 + rgb값 hex값으로 변환

    if (colorData[0]['error']) {
      return 'error';
    } else {
      const intRGBColorData: string[] = colorData.map(data =>
        this.RGBToHex(data['color'].map(color => parseInt(color))),
      );

      // borderColor값 db에저장
      const updateColor = { instaId: `${instaId}`, borderColor: intRGBColorData[0] };
      await this.placeService.updateOne(updateColor);
      return 'success';
    }
  }

  async getClusterColor(id: string): Promise<any> {
    try {
      const response = await axios({
        method: 'GET',
        url: `http://127.0.0.1:5002/image?id=${id}`,
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
      // console.log(data);
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
}
