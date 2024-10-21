"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardcontroller_1 = require("../controllers/dashboardcontroller");
const router = (0, express_1.Router)();
router.get("/", dashboardcontroller_1.getDashboardMetrics);
exports.default = router;
