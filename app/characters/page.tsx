import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skull, Eye, Zap, Ghost, Brain, Tv } from "lucide-react"

export default function CharactersPage() {
  const characters = [
    {
      id: "jeff-the-killer",
      name: "Jeff the Killer",
      tagline: "Go to sleep...",
      description:
        "A pale, burned figure with a carved smile and lidless eyes, Jeff represents the transformation of innocence into pure malevolence.",
      image: "/placeholder.svg?height=300&width=250",
      origin: "2008",
      category: "Slasher",
      icon: Skull,
      traits: ["Carved smile", "Burned skin", "Lidless eyes", "Kitchen knife"],
      stories: 15,
      popularity: 95,
    },
    {
      id: "slenderman",
      name: "The Slender Man",
      tagline: "Always watching, no eyes...",
      description:
        "A tall, thin figure in a black suit with no face, known for stalking children and causing memory loss and paranoia.",
      image: "/placeholder.svg?height=300&width=250",
      origin: "2009",
      category: "Entity",
      icon: Ghost,
      traits: ["Faceless", "Tentacle arms", "Black suit", "Forest dweller"],
      stories: 23,
      popularity: 98,
    },
    {
      id: "ben-drowned",
      name: "Ben Drowned",
      tagline: "You've met with a terrible fate...",
      description: "The vengeful spirit of a boy trapped within a haunted copy of The Legend of Zelda: Majora's Mask.",
      image: "/placeholder.svg?height=300&width=250",
      origin: "2010",
      category: "Digital Ghost",
      icon: Zap,
      traits: ["Glitched appearance", "Video game haunting", "Elegy statue", "Backwards song"],
      stories: 8,
      popularity: 87,
    },
    {
      id: "smile-dog",
      name: "Smile Dog",
      tagline: "Spread the word...",
      description:
        "A demonic dog with a human-like smile, whose cursed image drives viewers to madness unless they share it.",
      image: "/placeholder.svg?height=300&width=250",
      origin: "2008",
      category: "Cursed Image",
      icon: Eye,
      traits: ["Disturbing smile", "Red eyes", "Viral curse", "Psychological torment"],
      stories: 6,
      popularity: 78,
    },
    {
      id: "eyeless-jack",
      name: "Eyeless Jack",
      tagline: "I need your kidneys...",
      description:
        "A cannibalistic entity with empty eye sockets that leak black blood, known for harvesting human organs.",
      image: "/placeholder.svg?height=300&width=250",
      origin: "2010",
      category: "Demon",
      icon: Brain,
      traits: ["Empty eye sockets", "Blue mask", "Organ harvester", "Medical knowledge"],
      stories: 12,
      popularity: 82,
    },
    {
      id: "candle-cove",
      name: "Candle Cove",
      tagline: "You have to go inside...",
      description:
        "A mysterious children's TV show that only certain people remember, featuring disturbing puppet characters.",
      image: "/placeholder.svg?height=300&width=250",
      origin: "2009",
      category: "Phenomenon",
      icon: Tv,
      traits: ["Puppet show", "Shared memory", "Pirate theme", "Static episodes"],
      stories: 4,
      popularity: 71,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-red-900/20 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-red-500">
              The Archive
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/stories" className="text-gray-300 hover:text-red-400 transition-colors">
                Stories
              </Link>
              <Link href="/characters" className="text-red-400 font-medium">
                Characters
              </Link>
              <Link href="/origins" className="text-gray-300 hover:text-red-400 transition-colors">
                Origins
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-red-400 transition-colors">
                Community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Legendary <span className="text-red-500">Characters</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the iconic figures that have haunted the internet for over a decade. Each one a masterpiece of
              digital horror storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Characters Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => {
              const IconComponent = character.icon
              return (
                <Card
                  key={character.id}
                  className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <CardHeader className="p-0 relative">
                    <div className="relative overflow-hidden">
                      <Image
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        width={250}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">{character.category}</Badge>
                      <div className="absolute top-4 right-4 bg-black/70 rounded-full p-2">
                        <IconComponent className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{character.name}</h3>
                        <p className="text-red-400 text-sm italic">"{character.tagline}"</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardDescription className="text-gray-400 mb-4 line-clamp-3">
                      {character.description}
                    </CardDescription>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Origin Year</span>
                        <span className="text-white font-medium">{character.origin}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Stories</span>
                        <span className="text-white font-medium">{character.stories}</span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-gray-500 text-sm">Popularity</span>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${character.popularity}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm font-medium">{character.popularity}%</span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-gray-500 text-sm">Key Traits</span>
                        <div className="flex flex-wrap gap-1">
                          {character.traits.map((trait, index) => (
                            <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                              {trait}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">
                      View Character Profile
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Character Stats */}
      <section className="py-16 bg-red-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              The <span className="text-red-500">Hall of Fame</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These characters have transcended their original stories to become cultural icons, inspiring countless
              adaptations, fan works, and real-world phenomena.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">6</div>
              <div className="text-gray-400">Legendary Characters</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">68</div>
              <div className="text-gray-400">Total Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-400">Years Active</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">∞</div>
              <div className="text-gray-400">Nightmares Created</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
