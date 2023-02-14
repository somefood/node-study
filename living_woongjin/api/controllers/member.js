const express = require('express');
const memberService = require('../../services/member');
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
    console.log("모든 유저 조회");
    const memberList = await memberService.findAll();
    return res.json(memberList);
});

router.get('/:memberId', async (req, res, next) => {
    console.log("특정 유저 조회");
    const memberId = req.params.memberId;
    const member = await memberService.findById(memberId);
    return res.json(member);
});

router.post('/', async (req, res, next) => {
    console.log(req.body);
    const memberDto = req.body;
    await memberService.create(memberDto);
    res.status(201).json();
});

module.exports = router;
