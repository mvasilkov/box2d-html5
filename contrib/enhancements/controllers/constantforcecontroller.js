// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_controller', 'mod_box2d_math', 'mod_box2d_settings'], function (goog, box2d) {

/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

// -removed- goog.provide('box2d.b2ConstantForceController');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.b2ConstantForceController === 'undefined')
    box2d.b2ConstantForceController = {}


// -removed- goog.require('box2d.b2Settings');
// -removed- goog.require('box2d.b2Controller');
// -removed- goog.require('box2d.b2Math');

/**
 * Applies a force every frame
 * @export
 * @constructor
 * @extends {box2d.b2Controller}
 */
box2d.b2ConstantForceController = function ()
{
	goog.base(this); // base class constructor

	this.F = new box2d.b2Vec2(0, 0);
};

goog.inherits(box2d.b2ConstantForceController, box2d.b2Controller);

/**
 * The force to apply
 * @export
 * @type {box2d.b2Vec2}
 */
box2d.b2ConstantForceController.prototype.F = null;

/**
 * @see box2d.b2Controller::Step
 * @export
 * @return {void}
 * @param {box2d.b2TimeStep} step
 */
box2d.b2ConstantForceController.prototype.Step = function (step)
{
	for (var i = this.m_bodyList; i; i = i.nextBody)
	{
		var body = i.body;
		if (!body.IsAwake())
			continue;
		body.ApplyForce(this.F, body.GetWorldCenter());
	}
}

return box2d
})
// End auto-generated code.
