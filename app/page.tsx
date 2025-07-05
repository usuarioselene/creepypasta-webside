import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, Users, ArrowRight } from "lucide-react"

export default function HomePage() {
  const featuredStories = [
    {
      id: "jeff-the-killer",
      title: "Jeff the Killer",
      description: "The tale of a boy's descent into madness, forever changed by a single night of violence.",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "8 min read",
      views: "2.1M",
      category: "Classic",
    },
    {
      id: "slenderman",
      title: "The Slender Man",
      description: "In the depths of ancient forests, a tall figure watches from the shadows between trees.",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "12 min read",
      views: "3.4M",
      category: "Legendary",
    },
    {
      id: "ben-drowned",
      title: "Ben Drowned",
      description: "A haunted cartridge holds more than just a game—it contains a tortured soul seeking revenge.",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "15 min read",
      views: "1.8M",
      category: "Gaming",
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
              <Link href="/characters" className="text-gray-300 hover:text-red-400 transition-colors">
                Characters
              </Link>
              <Link href="/origins" className="text-gray-300 hover:text-red-400 transition-colors">
                Origins
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-red-400 transition-colors">
                Community
              </Link>
            </div>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              Enter Archive
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              The <span className="text-red-500">Creepypasta</span> Archive
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Journey into the digital folklore that shaped internet horror. Discover the origins of legendary tales
              that have haunted screens and minds for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Begin Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Random Story
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              The <span className="text-red-500">Legendary</span> Three
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The founding fathers of digital terror. These stories defined a generation of internet horror and continue
              to influence creators worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card
                key={story.id}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">{story.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-white group-hover:text-red-400 transition-colors">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4 line-clamp-2">{story.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {story.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {story.views}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:text-red-400 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-950/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-400">Classic Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">10M+</div>
              <div className="text-gray-400">Total Reads</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-400">Years of Terror</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">100K+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-t from-red-950/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Face Your <span className="text-red-500">Fears</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive deeper into the archive. Uncover the stories that started it all, and discover new nightmares waiting
            in the digital shadows.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Users className="mr-2 h-5 w-5" />
            Join the Community
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4">The Archive</h3>
              <p className="text-gray-400 text-sm">
                Preserving the digital folklore of internet horror since the beginning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Stories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/jeff-the-killer" className="hover:text-red-400">
                    Jeff the Killer
                  </Link>
                </li>
                <li>
                  <Link href="/slenderman" className="hover:text-red-400">
                    Slender Man
                  </Link>
                </li>
                <li>
                  <Link href="/ben-drowned" className="hover:text-red-400">
                    Ben Drowned
                  </Link>
                </li>
                <li>
                  <Link href="/smile-dog" className="hover:text-red-400">
                    Smile Dog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/submit" className="hover:text-red-400">
                    Submit Story
                  </Link>
                </li>
                <li>
                  <Link href="/forum" className="hover:text-red-400">
                    Discussion Forum
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="hover:text-red-400">
                    Featured Authors
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-red-400">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/history" className="hover:text-red-400">
                    History
                  </Link>
                </li>
                <li>
                  <Link href="/guidelines" className="hover:text-red-400">
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-red-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-red-400">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 The Creepypasta Archive. All rights reserved. Enter at your own risk.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
