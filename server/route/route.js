var router = require("express").Router();
const controllerData = require('../controller/controller.js');
router.post("/q1", controllerData.doQ1 );
router.post("/q2", controllerData.doQ2 );
router.post("/q3", controllerData.doQ3 );
router.post("/q4", controllerData.doQ4 );
router.post("/q5", controllerData.doQ5 );
router.get("/pdf", controllerData.getPDF );
// router.get("/q3", controllerData.q3Output );
// router.post("/action", controllerData.q3Output );

module.exports = router;