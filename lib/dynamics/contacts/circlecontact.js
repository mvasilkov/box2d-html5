// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_collidecircle', 'mod_box2d_contact', 'mod_box2d_settings'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.b2CircleContact');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.b2CircleContact === 'undefined')
    box2d.b2CircleContact = {}


// -removed- goog.require('box2d.b2Settings');
// -removed- goog.require('box2d.b2Contact');
// -removed- goog.require('box2d.b2CollideCircle');

/**
 * @export
 * @constructor
 * @extends {box2d.b2Contact}
 */
box2d.b2CircleContact = function ()
{
	goog.base(this); // base class constructor
};

goog.inherits(box2d.b2CircleContact, box2d.b2Contact);

/**
 * @export
 * @return {box2d.b2Contact}
 * @param allocator
 */
box2d.b2CircleContact.Create = function (allocator)
{
	return new box2d.b2CircleContact();
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 * @param allocator
 */
box2d.b2CircleContact.Destroy = function (contact, allocator)
{
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Fixture} fixtureA
 * @param {number} indexA
 * @param {box2d.b2Fixture} fixtureB
 * @param {number} indexB
 */
box2d.b2CircleContact.prototype.Reset = function (fixtureA, indexA, fixtureB, indexB)
{
	goog.base(this, 'Reset', fixtureA, indexA, fixtureB, indexB);
}

/**
 * @export
 * @return {void}
 * @param {box2d.b2Manifold} manifold
 * @param {box2d.b2Transform} xfA
 * @param {box2d.b2Transform} xfB
 */
box2d.b2CircleContact.prototype.Evaluate = function (manifold, xfA, xfB)
{
	var shapeA = this.m_fixtureA.GetShape();
	var shapeB = this.m_fixtureB.GetShape();
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(shapeA instanceof box2d.b2CircleShape); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(shapeB instanceof box2d.b2CircleShape); }
	box2d.b2CollideCircles(
		manifold,
		(shapeA instanceof box2d.b2CircleShape)? shapeA : null, xfA,
		(shapeB instanceof box2d.b2CircleShape)? shapeB : null, xfB);
}

return box2d
})
// End auto-generated code.
