// import express from "export";
// const router = express.Router();

import { Router } from "express"; // 필요한 것만 가져옴
const router = Router();

/**
 * bbs API Router 설정
 * 보통 API 서버는 view 가 없이 JSON(또는 xml) 데이터를 client 로
 * return 하는 서버를 말한다. (Spring Rest Server)
 *
 * res.send() 또는 res.json() 함수로 마감한다.
 *
 */
const Hello = {
  title: "노드서버 테스트 반가워",
  message: "Hello NodeJS BBS World",
};
router.get("/", (req, res, next) => {
  res.json(Hello);
});

export default router;
