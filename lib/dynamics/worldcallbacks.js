// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_settings'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.b2WorldCallbacks');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.b2WorldCallbacks === 'undefined')
    box2d.b2WorldCallbacks = {}


// -removed- goog.require('box2d.b2Settings');

/**
 * Joints and fixtures are destroyed when their associated body
 * is destroyed. Implement this listener so that you may nullify
 * references to these joints and shapes.
 * @export
 * @constructor
 */
box2d.b2DestructionListener = function ()
{
};

/**
 * Called when any joint is about to be destroyed due to the
 * destruction of one of its attached bodies.
 * @export
 * @return {void}
 * @param {box2d.b2Joint} joint
 */
box2d.b2DestructionListener.prototype.SayGoodbyeJoint = function (joint)
{
}

/**
 * Called when any fixture is about to be destroyed due to the
 * destruction of its parent body.
 * @export
 * @return {void}
 * @param {box2d.b2Fixture} fixture
 */
box2d.b2DestructionListener.prototype.SayGoodbyeFixture = function (fixture)
{
}

/**
 * Implement this class to provide collision filtering. In other
 * words, you can implement this class if you want finer control
 * over contact creation.
 * @export
 * @constructor
 */
box2d.b2ContactFilter = function ()
{
};

/**
 * Return true if contact calculations should be performed
 * between these two shapes.
 * warning for performance reasons this is only called when the
 * AABBs begin to overlap.
 * @export
 * @return {boolean}
 * @param {box2d.b2Fixture} fixtureA
 * @param {box2d.b2Fixture} fixtureB
 */
box2d.b2ContactFilter.prototype.ShouldCollide = function (fixtureA, fixtureB)
{
	var filter1 = fixtureA.GetFilterData();
	var filter2 = fixtureB.GetFilterData();

	if (filter1.groupIndex == filter2.groupIndex && filter1.groupIndex != 0)
	{
		return (filter1.groupIndex > 0);
	}

	var collide = (((filter1.maskBits & filter2.categoryBits) != 0) && ((filter1.categoryBits & filter2.maskBits) != 0));
	return collide;
}

box2d.b2ContactFilter.b2_defaultFilter = new box2d.b2ContactFilter();

/**
 * Contact impulses for reporting. Impulses are used instead of
 * forces because sub-step forces may approach infinity for
 * rigid body collisions. These match up one-to-one with the
 * contact points in b2Manifold.
 * @export
 * @constructor
 */
box2d.b2ContactImpulse = function ()
{
	this.normalImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
	this.tangentImpulses = box2d.b2MakeNumberArray(box2d.b2_maxManifoldPoints);
};

box2d.b2ContactImpulse.prototype.normalImpulses = null;
box2d.b2ContactImpulse.prototype.tangentImpulses = null;
box2d.b2ContactImpulse.prototype.count = 0;

/**
 * Implement this class to get contact information. You can use
 * these results for things like sounds and game logic. You can
 * also get contact results by traversing the contact lists
 * after the time step. However, you might miss some contacts
 * because continuous physics leads to sub-stepping.
 * Additionally you may receive multiple callbacks for the same
 * contact in a single time step.
 * You should strive to make your callbacks efficient because
 * there may be many callbacks per time step.
 * warning You cannot create/destroy Box2D entities inside these
 * callbacks.
 * @export
 * @constructor
 */
box2d.b2ContactListener = function ()
{
};

/**
 * Called when two fixtures begin to touch.
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 */
box2d.b2ContactListener.prototype.BeginContact = function (contact)
{
}

/**
 * Called when two fixtures cease to touch.
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 */
box2d.b2ContactListener.prototype.EndContact = function (contact)
{
}

/**
 * This is called after a contact is updated. This allows you to
 * inspect a contact before it goes to the solver. If you are
 * careful, you can modify the contact manifold (e.g. disable
 * contact).
 * A copy of the old manifold is provided so that you can detect
 * changes.
 * Note: this is called only for awake bodies.
 * Note: this is called even when the number of contact points
 * is zero.
 * Note: this is not called for sensors.
 * Note: if you set the number of contact points to zero, you
 * will not get an EndContact callback. However, you may get a
 * BeginContact callback the next step.
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 * @param {box2d.b2Manifold} oldManifold
 */
box2d.b2ContactListener.prototype.PreSolve = function (contact, oldManifold)
{
}

/**
 * This lets you inspect a contact after the solver is finished.
 * This is useful for inspecting impulses.
 * Note: the contact manifold does not include time of impact
 * impulses, which can be arbitrarily large if the sub-step is
 * small. Hence the impulse is provided explicitly in a separate
 * data structure.
 * Note: this is only called for contacts that are touching,
 * solid, and awake.
 * @export
 * @return {void}
 * @param {box2d.b2Contact} contact
 * @param {box2d.b2ContactImpulse} impulse
 */
box2d.b2ContactListener.prototype.PostSolve = function (contact, impulse)
{
}

/**
 * @export
 * @type {box2d.b2ContactListener}
 */
box2d.b2ContactListener.b2_defaultListener = new box2d.b2ContactListener();

/**
 * Callback class for AABB queries.
 * See b2World::Query
 * @export
 * @constructor
 */
box2d.b2QueryCallback = function ()
{
}

/**
 * Called for each fixture found in the query AABB.
 * @export
 * @return {boolean} false to terminate the query.
 */
box2d.b2QueryCallback.prototype.ReportFixture = function (fixture)
{
	return true;
}

/**
 * Callback class for ray casts.
 * See b2World::RayCast
 * @export
 * @constructor
 */
box2d.b2RayCastCallback = function ()
{
}

/**
 * Called for each fixture found in the query. You control how
 * the ray cast proceeds by returning a float:
 * return -1: ignore this fixture and continue
 * return 0: terminate the ray cast
 * return fraction: clip the ray to this point
 * return 1: don't clip the ray and continue
 * @export
 * @return {number}
 * @param {box2d.b2Fixture} fixture the fixture hit by the ray
 * @param {box2d.b2Vec2} point the point of initial intersection
 * @param {box2d.b2Vec2} normal the normal vector at the point
 *  	  of intersection
 * @param {number} fraction
 */
box2d.b2RayCastCallback.prototype.ReportFixture = function (fixture, point, normal, fraction)
{
	return fraction;
}

return box2d
})
// End auto-generated code.
