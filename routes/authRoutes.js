const express = require("express");
const passport = require("passport");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: GitHub OAuth Authentication
 */

const router = express.Router();

/**
 * @swagger
 * /auth/github:
 *   get:
 *     summary: Login with GitHub
 *     tags: [Authentication]
 *     description: Redirects the user to GitHub for OAuth authentication.
 *     responses:
 *       302:
 *         description: Redirects to GitHub login page.
 */

// Login with GitHub
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);


/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: GitHub OAuth callback
 *     tags: [Authentication]
 *     description: Handles GitHub authentication callback and creates a user session.
 *     responses:
 *       200:
 *         description: Authentication successful.
 *       401:
 *         description: Authentication failed.
 */

// GitHub callback
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.json({
      success: true,
      message: "Successfully authenticated with GitHub",
      user: req.user,
    });
  }
);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout the authenticated user
 *     tags: [Authentication]
 *     description: Ends the current authenticated session.
 *     responses:
 *       200:
 *         description: Logged out successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Logged out successfully
 *       500:
 *         description: Logout failed.
 */


// Logout
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    req.session.destroy(() => {
      res.clearCookie("connect.sid");

      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    });
  });
});

module.exports = router;