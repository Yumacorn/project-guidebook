# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

universe_a = Universe.create(name: "Star Trek", type_of: "series")
universe_b = Universe.create(name: "Leaders", type_of: "history")
universe_c = Universe.create(name: "DnD", type_of: "game")
universe_d = Universe.create(name: "Ivy Leagues", type_of: "organization")

character_a = Character.create(name: "Captain Kathyrn Janeway", type_of: "Character", universe_id: 1, description: "Brought her crew home from over 70,000 lightyears away")
character_b = Character.create(name: "Voyager", type_of: "Ship", universe_id: 1, description: "Intrepid Class, packed with bioneural circuitry")
character_c = Character.create(name: "Klingons", type_of: "Race", universe_id: 1, description: "Fierce warriors! It is a glorious day to die!")

character_d = Character.create(name: "Abraham Lincoln", type_of: "Historical Figure", universe_id: 2, description: "The 16th President of the United States")
character_e = Character.create(name: "John D. Rockefeller", type_of: "Historical Figure", universe_id: 2, description: "an American business magnate and philanthropist. He is widely considered the wealthiest American of all time and the richest person in modern history.")

character_f = Character.create(name: "Dragonborn", type_of: "Race", universe_id: 3, description: "Dragonborns resemble humanoid dragons. Proud, honorable warriors, allegedly born from the blood of an ancient dragon god")
character_g = Character.create(name: "Human", type_of: "Race", universe_id: 3, description: "Ambitious, driven, pragmatic—a race of heroes, and also a race of villains")
character_h= Character.create(name: "Paladin", type_of: "Class", universe_id: 3, description: "Role: Defender. You are extremely durable, with high hit points and the ability to wear the heaviest armor. You can issue bold challenges to foes and compel them to fight you rather than your allies.")
character_i= Character.create(name: "Ranger", type_of: "Class", universe_id: 3, description: "Role: Striker. You concentrate on either ranged attacks or two-weapon melee fighting to deal a lot of damage to one enemy at a time. Your attacks rely on speed and mobility, since you prefer to use hit-and-run tactics whenever possible.")

character_j = Character.create(name: "Harvard", type_of: "College", universe_id: 4, description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world.")



