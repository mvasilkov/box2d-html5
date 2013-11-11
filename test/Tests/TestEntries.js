// This wrapper was auto-generated.
define(['goog', 'box2d.Testbed.AddPair', 'box2d.Testbed.ApplyForce', 'box2d.Testbed.BlobTest', 'box2d.Testbed.BodyTypes', 'box2d.Testbed.Breakable', 'box2d.Testbed.Bridge', 'box2d.Testbed.BulletTest', 'box2d.Testbed.BuoyancyTest', 'box2d.Testbed.Cantilever', 'box2d.Testbed.Car', 'box2d.Testbed.Chain', 'box2d.Testbed.CharacterCollision', 'box2d.Testbed.CollisionFiltering', 'box2d.Testbed.CollisionProcessing', 'box2d.Testbed.CompoundShapes', 'box2d.Testbed.Confined', 'box2d.Testbed.ContinuousTest', 'box2d.Testbed.ConvexHull', 'box2d.Testbed.ConveyorBelt', 'box2d.Testbed.DistanceTest', 'box2d.Testbed.Dominos', 'box2d.Testbed.DumpShell', 'box2d.Testbed.DynamicTreeTest', 'box2d.Testbed.EdgeShapes', 'box2d.Testbed.EdgeTest', 'box2d.Testbed.Gears', 'box2d.Testbed.Mobile', 'box2d.Testbed.MobileBalanced', 'box2d.Testbed.MotorJoint', 'box2d.Testbed.OneSidedPlatform', 'box2d.Testbed.Pinball', 'box2d.Testbed.PolyCollision', 'box2d.Testbed.PolyShapes', 'box2d.Testbed.Prismatic', 'box2d.Testbed.Pulleys', 'box2d.Testbed.Pyramid', 'box2d.Testbed.RayCast', 'box2d.Testbed.Revolute', 'box2d.Testbed.Rope', 'box2d.Testbed.RopeJoint', 'box2d.Testbed.SensorTest', 'box2d.Testbed.ShapeEditing', 'box2d.Testbed.SliderCrank', 'box2d.Testbed.SphereStack', 'box2d.Testbed.Test', 'box2d.Testbed.TestCCD', 'box2d.Testbed.TestRagdoll', 'box2d.Testbed.TestStack', 'box2d.Testbed.TheoJansen', 'box2d.Testbed.Tiles', 'box2d.Testbed.TimeOfImpact', 'box2d.Testbed.Tumbler', 'box2d.Testbed.VaryingFriction', 'box2d.Testbed.VaryingRestitution', 'box2d.Testbed.VerticalStack', 'box2d.Testbed.Web'], function (goog, box2d) {

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
if (typeof box2d.Testbed.Test === 'undefined')
    throw Error('I can haz box2d.Testbed.Test?')


// -removed- goog.require('box2d.Testbed.AddPair');
if (typeof box2d.Testbed.AddPair === 'undefined')
    throw Error('I can haz box2d.Testbed.AddPair?')

// -removed- goog.require('box2d.Testbed.ApplyForce');
if (typeof box2d.Testbed.ApplyForce === 'undefined')
    throw Error('I can haz box2d.Testbed.ApplyForce?')

// -removed- goog.require('box2d.Testbed.BodyTypes');
if (typeof box2d.Testbed.BodyTypes === 'undefined')
    throw Error('I can haz box2d.Testbed.BodyTypes?')

// -removed- goog.require('box2d.Testbed.Breakable');
if (typeof box2d.Testbed.Breakable === 'undefined')
    throw Error('I can haz box2d.Testbed.Breakable?')

// -removed- goog.require('box2d.Testbed.Bridge');
if (typeof box2d.Testbed.Bridge === 'undefined')
    throw Error('I can haz box2d.Testbed.Bridge?')

// -removed- goog.require('box2d.Testbed.BulletTest');
if (typeof box2d.Testbed.BulletTest === 'undefined')
    throw Error('I can haz box2d.Testbed.BulletTest?')

// -removed- goog.require('box2d.Testbed.Cantilever');
if (typeof box2d.Testbed.Cantilever === 'undefined')
    throw Error('I can haz box2d.Testbed.Cantilever?')

// -removed- goog.require('box2d.Testbed.Car');
if (typeof box2d.Testbed.Car === 'undefined')
    throw Error('I can haz box2d.Testbed.Car?')

// -removed- goog.require('box2d.Testbed.ContinuousTest');
if (typeof box2d.Testbed.ContinuousTest === 'undefined')
    throw Error('I can haz box2d.Testbed.ContinuousTest?')

// -removed- goog.require('box2d.Testbed.Chain');
if (typeof box2d.Testbed.Chain === 'undefined')
    throw Error('I can haz box2d.Testbed.Chain?')

// -removed- goog.require('box2d.Testbed.CharacterCollision');
if (typeof box2d.Testbed.CharacterCollision === 'undefined')
    throw Error('I can haz box2d.Testbed.CharacterCollision?')

// -removed- goog.require('box2d.Testbed.CollisionFiltering');
if (typeof box2d.Testbed.CollisionFiltering === 'undefined')
    throw Error('I can haz box2d.Testbed.CollisionFiltering?')

// -removed- goog.require('box2d.Testbed.CollisionProcessing');
if (typeof box2d.Testbed.CollisionProcessing === 'undefined')
    throw Error('I can haz box2d.Testbed.CollisionProcessing?')

// -removed- goog.require('box2d.Testbed.CompoundShapes');
if (typeof box2d.Testbed.CompoundShapes === 'undefined')
    throw Error('I can haz box2d.Testbed.CompoundShapes?')

// -removed- goog.require('box2d.Testbed.Confined');
if (typeof box2d.Testbed.Confined === 'undefined')
    throw Error('I can haz box2d.Testbed.Confined?')

// -removed- goog.require('box2d.Testbed.ConvexHull');
if (typeof box2d.Testbed.ConvexHull === 'undefined')
    throw Error('I can haz box2d.Testbed.ConvexHull?')

// -removed- goog.require('box2d.Testbed.ConveyorBelt');
if (typeof box2d.Testbed.ConveyorBelt === 'undefined')
    throw Error('I can haz box2d.Testbed.ConveyorBelt?')

// -removed- goog.require('box2d.Testbed.DistanceTest');
if (typeof box2d.Testbed.DistanceTest === 'undefined')
    throw Error('I can haz box2d.Testbed.DistanceTest?')

// -removed- goog.require('box2d.Testbed.Dominos');
if (typeof box2d.Testbed.Dominos === 'undefined')
    throw Error('I can haz box2d.Testbed.Dominos?')

// -removed- goog.require('box2d.Testbed.DumpShell');
if (typeof box2d.Testbed.DumpShell === 'undefined')
    throw Error('I can haz box2d.Testbed.DumpShell?')

// -removed- goog.require('box2d.Testbed.DynamicTreeTest');
if (typeof box2d.Testbed.DynamicTreeTest === 'undefined')
    throw Error('I can haz box2d.Testbed.DynamicTreeTest?')

// -removed- goog.require('box2d.Testbed.EdgeShapes');
if (typeof box2d.Testbed.EdgeShapes === 'undefined')
    throw Error('I can haz box2d.Testbed.EdgeShapes?')

// -removed- goog.require('box2d.Testbed.EdgeTest');
if (typeof box2d.Testbed.EdgeTest === 'undefined')
    throw Error('I can haz box2d.Testbed.EdgeTest?')

// -removed- goog.require('box2d.Testbed.Gears');
if (typeof box2d.Testbed.Gears === 'undefined')
    throw Error('I can haz box2d.Testbed.Gears?')

// -removed- goog.require('box2d.Testbed.Mobile');
if (typeof box2d.Testbed.Mobile === 'undefined')
    throw Error('I can haz box2d.Testbed.Mobile?')

// -removed- goog.require('box2d.Testbed.MobileBalanced');
if (typeof box2d.Testbed.MobileBalanced === 'undefined')
    throw Error('I can haz box2d.Testbed.MobileBalanced?')

// -removed- goog.require('box2d.Testbed.MotorJoint');
if (typeof box2d.Testbed.MotorJoint === 'undefined')
    throw Error('I can haz box2d.Testbed.MotorJoint?')

// -removed- goog.require('box2d.Testbed.OneSidedPlatform');
if (typeof box2d.Testbed.OneSidedPlatform === 'undefined')
    throw Error('I can haz box2d.Testbed.OneSidedPlatform?')

// -removed- goog.require('box2d.Testbed.Pinball');
if (typeof box2d.Testbed.Pinball === 'undefined')
    throw Error('I can haz box2d.Testbed.Pinball?')

// -removed- goog.require('box2d.Testbed.PolyCollision');
if (typeof box2d.Testbed.PolyCollision === 'undefined')
    throw Error('I can haz box2d.Testbed.PolyCollision?')

// -removed- goog.require('box2d.Testbed.PolyShapes');
if (typeof box2d.Testbed.PolyShapes === 'undefined')
    throw Error('I can haz box2d.Testbed.PolyShapes?')

// -removed- goog.require('box2d.Testbed.Prismatic');
if (typeof box2d.Testbed.Prismatic === 'undefined')
    throw Error('I can haz box2d.Testbed.Prismatic?')

// -removed- goog.require('box2d.Testbed.Pulleys');
if (typeof box2d.Testbed.Pulleys === 'undefined')
    throw Error('I can haz box2d.Testbed.Pulleys?')

// -removed- goog.require('box2d.Testbed.Pyramid');
if (typeof box2d.Testbed.Pyramid === 'undefined')
    throw Error('I can haz box2d.Testbed.Pyramid?')

// -removed- goog.require('box2d.Testbed.RayCast');
if (typeof box2d.Testbed.RayCast === 'undefined')
    throw Error('I can haz box2d.Testbed.RayCast?')

// -removed- goog.require('box2d.Testbed.Revolute');
if (typeof box2d.Testbed.Revolute === 'undefined')
    throw Error('I can haz box2d.Testbed.Revolute?')

// -removed- goog.require('box2d.Testbed.Rope');
if (typeof box2d.Testbed.Rope === 'undefined')
    throw Error('I can haz box2d.Testbed.Rope?')

// -removed- goog.require('box2d.Testbed.RopeJoint');
if (typeof box2d.Testbed.RopeJoint === 'undefined')
    throw Error('I can haz box2d.Testbed.RopeJoint?')

// -removed- goog.require('box2d.Testbed.SensorTest');
if (typeof box2d.Testbed.SensorTest === 'undefined')
    throw Error('I can haz box2d.Testbed.SensorTest?')

// -removed- goog.require('box2d.Testbed.ShapeEditing');
if (typeof box2d.Testbed.ShapeEditing === 'undefined')
    throw Error('I can haz box2d.Testbed.ShapeEditing?')

// -removed- goog.require('box2d.Testbed.SliderCrank');
if (typeof box2d.Testbed.SliderCrank === 'undefined')
    throw Error('I can haz box2d.Testbed.SliderCrank?')

// -removed- goog.require('box2d.Testbed.SphereStack');
if (typeof box2d.Testbed.SphereStack === 'undefined')
    throw Error('I can haz box2d.Testbed.SphereStack?')

// -removed- goog.require('box2d.Testbed.TheoJansen');
if (typeof box2d.Testbed.TheoJansen === 'undefined')
    throw Error('I can haz box2d.Testbed.TheoJansen?')

// -removed- goog.require('box2d.Testbed.Tiles');
if (typeof box2d.Testbed.Tiles === 'undefined')
    throw Error('I can haz box2d.Testbed.Tiles?')

// -removed- goog.require('box2d.Testbed.TimeOfImpact');
if (typeof box2d.Testbed.TimeOfImpact === 'undefined')
    throw Error('I can haz box2d.Testbed.TimeOfImpact?')

// -removed- goog.require('box2d.Testbed.Tumbler');
if (typeof box2d.Testbed.Tumbler === 'undefined')
    throw Error('I can haz box2d.Testbed.Tumbler?')

// -removed- goog.require('box2d.Testbed.VaryingFriction');
if (typeof box2d.Testbed.VaryingFriction === 'undefined')
    throw Error('I can haz box2d.Testbed.VaryingFriction?')

// -removed- goog.require('box2d.Testbed.VaryingRestitution');
if (typeof box2d.Testbed.VaryingRestitution === 'undefined')
    throw Error('I can haz box2d.Testbed.VaryingRestitution?')

// -removed- goog.require('box2d.Testbed.VerticalStack');
if (typeof box2d.Testbed.VerticalStack === 'undefined')
    throw Error('I can haz box2d.Testbed.VerticalStack?')

// -removed- goog.require('box2d.Testbed.Web');
if (typeof box2d.Testbed.Web === 'undefined')
    throw Error('I can haz box2d.Testbed.Web?')


// -removed- goog.require('box2d.Testbed.BlobTest');
if (typeof box2d.Testbed.BlobTest === 'undefined')
    throw Error('I can haz box2d.Testbed.BlobTest?')

// -removed- goog.require('box2d.Testbed.BuoyancyTest');
if (typeof box2d.Testbed.BuoyancyTest === 'undefined')
    throw Error('I can haz box2d.Testbed.BuoyancyTest?')


// -removed- goog.require('box2d.Testbed.TestCCD');
if (typeof box2d.Testbed.TestCCD === 'undefined')
    throw Error('I can haz box2d.Testbed.TestCCD?')

// -removed- goog.require('box2d.Testbed.TestRagdoll');
if (typeof box2d.Testbed.TestRagdoll === 'undefined')
    throw Error('I can haz box2d.Testbed.TestRagdoll?')

// -removed- goog.require('box2d.Testbed.TestStack');
if (typeof box2d.Testbed.TestStack === 'undefined')
    throw Error('I can haz box2d.Testbed.TestStack?')


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
