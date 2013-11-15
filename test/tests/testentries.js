// This wrapper was auto-generated.
define(['mod_goog', 'mod_box2d_testbed_addpair', 'mod_box2d_testbed_applyforce', 'mod_box2d_testbed_blobtest', 'mod_box2d_testbed_bodytypes', 'mod_box2d_testbed_breakable', 'mod_box2d_testbed_bridge', 'mod_box2d_testbed_bullettest', 'mod_box2d_testbed_buoyancytest', 'mod_box2d_testbed_cantilever', 'mod_box2d_testbed_car', 'mod_box2d_testbed_chain', 'mod_box2d_testbed_charactercollision', 'mod_box2d_testbed_collisionfiltering', 'mod_box2d_testbed_collisionprocessing', 'mod_box2d_testbed_compoundshapes', 'mod_box2d_testbed_confined', 'mod_box2d_testbed_continuoustest', 'mod_box2d_testbed_convexhull', 'mod_box2d_testbed_conveyorbelt', 'mod_box2d_testbed_distancetest', 'mod_box2d_testbed_dominos', 'mod_box2d_testbed_dumpshell', 'mod_box2d_testbed_dynamictreetest', 'mod_box2d_testbed_edgeshapes', 'mod_box2d_testbed_edgetest', 'mod_box2d_testbed_gears', 'mod_box2d_testbed_mobile', 'mod_box2d_testbed_mobilebalanced', 'mod_box2d_testbed_motorjoint', 'mod_box2d_testbed_onesidedplatform', 'mod_box2d_testbed_pinball', 'mod_box2d_testbed_polycollision', 'mod_box2d_testbed_polyshapes', 'mod_box2d_testbed_prismatic', 'mod_box2d_testbed_pulleys', 'mod_box2d_testbed_pyramid', 'mod_box2d_testbed_raycast', 'mod_box2d_testbed_revolute', 'mod_box2d_testbed_rope', 'mod_box2d_testbed_ropejoint', 'mod_box2d_testbed_sensortest', 'mod_box2d_testbed_shapeediting', 'mod_box2d_testbed_slidercrank', 'mod_box2d_testbed_spherestack', 'mod_box2d_testbed_test', 'mod_box2d_testbed_testccd', 'mod_box2d_testbed_testragdoll', 'mod_box2d_testbed_teststack', 'mod_box2d_testbed_theojansen', 'mod_box2d_testbed_tiles', 'mod_box2d_testbed_timeofimpact', 'mod_box2d_testbed_tumbler', 'mod_box2d_testbed_varyingfriction', 'mod_box2d_testbed_varyingrestitution', 'mod_box2d_testbed_verticalstack', 'mod_box2d_testbed_web'], function (goog, box2d) {

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

// -removed- goog.provide('box2d.Testbed.TestEntries');
if (typeof box2d === 'undefined')
    box2d = {}
if (typeof box2d.Testbed === 'undefined')
    box2d.Testbed = {}
if (typeof box2d.Testbed.TestEntries === 'undefined')
    box2d.Testbed.TestEntries = {}


// -removed- goog.require('box2d.Testbed.Test');

// -removed- goog.require('box2d.Testbed.AddPair');
// -removed- goog.require('box2d.Testbed.ApplyForce');
// -removed- goog.require('box2d.Testbed.BodyTypes');
// -removed- goog.require('box2d.Testbed.Breakable');
// -removed- goog.require('box2d.Testbed.Bridge');
// -removed- goog.require('box2d.Testbed.BulletTest');
// -removed- goog.require('box2d.Testbed.Cantilever');
// -removed- goog.require('box2d.Testbed.Car');
// -removed- goog.require('box2d.Testbed.ContinuousTest');
// -removed- goog.require('box2d.Testbed.Chain');
// -removed- goog.require('box2d.Testbed.CharacterCollision');
// -removed- goog.require('box2d.Testbed.CollisionFiltering');
// -removed- goog.require('box2d.Testbed.CollisionProcessing');
// -removed- goog.require('box2d.Testbed.CompoundShapes');
// -removed- goog.require('box2d.Testbed.Confined');
// -removed- goog.require('box2d.Testbed.ConvexHull');
// -removed- goog.require('box2d.Testbed.ConveyorBelt');
// -removed- goog.require('box2d.Testbed.DistanceTest');
// -removed- goog.require('box2d.Testbed.Dominos');
// -removed- goog.require('box2d.Testbed.DumpShell');
// -removed- goog.require('box2d.Testbed.DynamicTreeTest');
// -removed- goog.require('box2d.Testbed.EdgeShapes');
// -removed- goog.require('box2d.Testbed.EdgeTest');
// -removed- goog.require('box2d.Testbed.Gears');
// -removed- goog.require('box2d.Testbed.Mobile');
// -removed- goog.require('box2d.Testbed.MobileBalanced');
// -removed- goog.require('box2d.Testbed.MotorJoint');
// -removed- goog.require('box2d.Testbed.OneSidedPlatform');
// -removed- goog.require('box2d.Testbed.Pinball');
// -removed- goog.require('box2d.Testbed.PolyCollision');
// -removed- goog.require('box2d.Testbed.PolyShapes');
// -removed- goog.require('box2d.Testbed.Prismatic');
// -removed- goog.require('box2d.Testbed.Pulleys');
// -removed- goog.require('box2d.Testbed.Pyramid');
// -removed- goog.require('box2d.Testbed.RayCast');
// -removed- goog.require('box2d.Testbed.Revolute');
// -removed- goog.require('box2d.Testbed.Rope');
// -removed- goog.require('box2d.Testbed.RopeJoint');
// -removed- goog.require('box2d.Testbed.SensorTest');
// -removed- goog.require('box2d.Testbed.ShapeEditing');
// -removed- goog.require('box2d.Testbed.SliderCrank');
// -removed- goog.require('box2d.Testbed.SphereStack');
// -removed- goog.require('box2d.Testbed.TheoJansen');
// -removed- goog.require('box2d.Testbed.Tiles');
// -removed- goog.require('box2d.Testbed.TimeOfImpact');
// -removed- goog.require('box2d.Testbed.Tumbler');
// -removed- goog.require('box2d.Testbed.VaryingFriction');
// -removed- goog.require('box2d.Testbed.VaryingRestitution');
// -removed- goog.require('box2d.Testbed.VerticalStack');
// -removed- goog.require('box2d.Testbed.Web');

// -removed- goog.require('box2d.Testbed.BlobTest');
// -removed- goog.require('box2d.Testbed.BuoyancyTest');

// -removed- goog.require('box2d.Testbed.TestCCD');
// -removed- goog.require('box2d.Testbed.TestRagdoll');
// -removed- goog.require('box2d.Testbed.TestStack');

/**
 * @export
 * @return {Array.<box2d.Testbed.TestEntry>}
 * @param {Array.<box2d.Testbed.TestEntry>} entries
 */
box2d.Testbed.GetTestEntries = function (entries)
{
	entries.push(new box2d.Testbed.TestEntry("Convex Hull", box2d.Testbed.ConvexHull.Create));
	entries.push(new box2d.Testbed.TestEntry("Apply Force", box2d.Testbed.ApplyForce.Create));
	entries.push(new box2d.Testbed.TestEntry("Continuous Test", box2d.Testbed.ContinuousTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Time of Impact", box2d.Testbed.TimeOfImpact.Create));
	entries.push(new box2d.Testbed.TestEntry("Motor Joint", box2d.Testbed.MotorJoint.Create));
	entries.push(new box2d.Testbed.TestEntry("Mobile", box2d.Testbed.Mobile.Create));
	entries.push(new box2d.Testbed.TestEntry("MobileBalanced", box2d.Testbed.MobileBalanced.Create));
	entries.push(new box2d.Testbed.TestEntry("Ray-Cast", box2d.Testbed.RayCast.Create));
	entries.push(new box2d.Testbed.TestEntry("Conveyor Belt", box2d.Testbed.ConveyorBelt.Create));
	entries.push(new box2d.Testbed.TestEntry("Gears", box2d.Testbed.Gears.Create));
	entries.push(new box2d.Testbed.TestEntry("Varying Restitution", box2d.Testbed.VaryingRestitution.Create));
	entries.push(new box2d.Testbed.TestEntry("Tumbler", box2d.Testbed.Tumbler.Create));
	entries.push(new box2d.Testbed.TestEntry("Tiles", box2d.Testbed.Tiles.Create));
	entries.push(new box2d.Testbed.TestEntry("Dump Shell", box2d.Testbed.DumpShell.Create));
	entries.push(new box2d.Testbed.TestEntry("Cantilever", box2d.Testbed.Cantilever.Create));
	entries.push(new box2d.Testbed.TestEntry("Character Collision", box2d.Testbed.CharacterCollision.Create));
	entries.push(new box2d.Testbed.TestEntry("Edge Test", box2d.Testbed.EdgeTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Body Types", box2d.Testbed.BodyTypes.Create));
	entries.push(new box2d.Testbed.TestEntry("Shape Editing", box2d.Testbed.ShapeEditing.Create));
	entries.push(new box2d.Testbed.TestEntry("Car", box2d.Testbed.Car.Create));
	entries.push(new box2d.Testbed.TestEntry("Prismatic", box2d.Testbed.Prismatic.Create));
	entries.push(new box2d.Testbed.TestEntry("Vertical Stack", box2d.Testbed.VerticalStack.Create));
	entries.push(new box2d.Testbed.TestEntry("SphereStack", box2d.Testbed.SphereStack.Create));
	entries.push(new box2d.Testbed.TestEntry("Revolute", box2d.Testbed.Revolute.Create));
	entries.push(new box2d.Testbed.TestEntry("Pulleys", box2d.Testbed.Pulleys.Create));
	entries.push(new box2d.Testbed.TestEntry("Polygon Shapes", box2d.Testbed.PolyShapes.Create));
	entries.push(new box2d.Testbed.TestEntry("Rope", box2d.Testbed.Rope.Create));
	entries.push(new box2d.Testbed.TestEntry("Web", box2d.Testbed.Web.Create));
	entries.push(new box2d.Testbed.TestEntry("RopeJoint", box2d.Testbed.RopeJoint.Create));
	entries.push(new box2d.Testbed.TestEntry("One-Sided Platform", box2d.Testbed.OneSidedPlatform.Create));
	entries.push(new box2d.Testbed.TestEntry("Pinball", box2d.Testbed.Pinball.Create));
	entries.push(new box2d.Testbed.TestEntry("Bullet Test", box2d.Testbed.BulletTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Confined", box2d.Testbed.Confined.Create));
	entries.push(new box2d.Testbed.TestEntry("Pyramid", box2d.Testbed.Pyramid.Create));
	entries.push(new box2d.Testbed.TestEntry("Theo Jansen's Walker", box2d.Testbed.TheoJansen.Create));
	entries.push(new box2d.Testbed.TestEntry("Edge Shapes", box2d.Testbed.EdgeShapes.Create));
	entries.push(new box2d.Testbed.TestEntry("PolyCollision", box2d.Testbed.PolyCollision.Create));
	entries.push(new box2d.Testbed.TestEntry("Bridge", box2d.Testbed.Bridge.Create));
	entries.push(new box2d.Testbed.TestEntry("Breakable", box2d.Testbed.Breakable.Create));
	entries.push(new box2d.Testbed.TestEntry("Chain", box2d.Testbed.Chain.Create));
	entries.push(new box2d.Testbed.TestEntry("Collision Filtering", box2d.Testbed.CollisionFiltering.Create));
	entries.push(new box2d.Testbed.TestEntry("Collision Processing", box2d.Testbed.CollisionProcessing.Create));
	entries.push(new box2d.Testbed.TestEntry("Compound Shapes", box2d.Testbed.CompoundShapes.Create));
	entries.push(new box2d.Testbed.TestEntry("Distance Test", box2d.Testbed.DistanceTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Dominos", box2d.Testbed.Dominos.Create));
	entries.push(new box2d.Testbed.TestEntry("Dynamic Tree", box2d.Testbed.DynamicTreeTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Sensor Test", box2d.Testbed.SensorTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Slider Crank", box2d.Testbed.SliderCrank.Create));
	entries.push(new box2d.Testbed.TestEntry("Varying Friction", box2d.Testbed.VaryingFriction.Create));
	entries.push(new box2d.Testbed.TestEntry("Add Pair Stress Test", box2d.Testbed.AddPair.Create));

	entries.push(new box2d.Testbed.TestEntry("Blob Test", box2d.Testbed.BlobTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Buoyancy Test", box2d.Testbed.BuoyancyTest.Create));

	entries.push(new box2d.Testbed.TestEntry("Continuous Collision", box2d.Testbed.TestCCD.Create));
	entries.push(new box2d.Testbed.TestEntry("Ragdolls", box2d.Testbed.TestRagdoll.Create));
	entries.push(new box2d.Testbed.TestEntry("Stacked Boxes", box2d.Testbed.TestStack.Create));

	return entries;
}

return box2d
})
// End auto-generated code.
