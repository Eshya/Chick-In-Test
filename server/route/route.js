var router = require("express").Router();
const controllerData = require('../controller/controller.js');
router.get("/q1", controllerData.doQ1 );
router.get("/q2", controllerData.doQ2 );
router.get("/q3", controllerData.doQ3 );
router.get("/q4", controllerData.doQ4 );
router.get("/q5", controllerData.doQ5 );
router.get("/pdf", controllerData.getPDF );
// router.get("/q3", controllerData.q3Output );
// router.post("/action", controllerData.q3Output );

module.exports = router;