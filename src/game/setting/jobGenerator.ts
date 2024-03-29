import { Injectable } from "../../decorators/di.decorator";
import { jobList } from "../data";

import { Human } from "./schema/human";

const jobStatus = [
  { type: "전사", lv: 1, hp: [100, 100], exp: 0, atk: 10, location: [0, 0] },
];

@Injectable()
export class JobGenerator {
  constructor() {}

  jobGenerator(h: number, v: number) {
    for (let i = 0; i < jobStatus.length; i++) {
      const jobschema = new Human(jobStatus[i]);
      jobschema.location = [Math.floor(h / 2), Math.floor(v / 2)];

      jobList.list.push({ 번호: i, 스탯: jobschema });
    }
    return jobList.list;
  }
}
