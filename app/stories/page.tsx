import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Clock, Eye, Star } from "lucide-react"

export default function StoriesPage() {
  const stories = [
    {
      id: "jeff-the-killer",
      title: "Jeff the Killer",
      description: "Go to sleep... The haunting tale of a boy's transformation into a legendary killer.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "8 min",
      views: "2.1M",
      rating: 4.8,
      category: "Classic",
      author: "Unknown",
      year: "2008",
    },
    {
      id: "slenderman",
      title: "The Slender Man",
      description: "A tall, faceless figure that stalks from the shadows of ancient forests.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "12 min",
      views: "3.4M",
      rating: 4.9,
      category: "Legendary",
      author: "Victor Surge",
      year: "2009",
    },
    {
      id: "ben-drowned",
      title: "Ben Drowned",
      description: "You've met with a terrible fate, haven't you? A haunted Majora's Mask cartridge.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "15 min",
      views: "1.8M",
      rating: 4.7,
      category: "Gaming",
      author: "Jadusable",
      year: "2010",
    },
    {
      id: "smile-dog",
      title: "Smile Dog",
      description: "Spread the word... A cursed image that brings madness to all who view it.",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 min",
      views: "1.2M",
      rating: 4.5,
      category: "Classic",
      author: "Unknown",
      year: "2008",
    },
    {
      id: "russian-sleep-experiment",
      title: "The Russian Sleep Experiment",
      description: "What happens when humans are deprived of sleep for too long?",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "10 min",
      views: "2.8M",
      rating: 4.6,
      category: "Psychological",
      author: "Unknown",
      year: "2010",
    },
    {
      id: "candle-cove",
      title: "Candle Cove",
      description: "Do you remember that weird kids' show from the 70s?",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 min",
      views: "900K",
      rating: 4.4,
      category: "Nostalgia",
      author: "Kris Straub",
      year: "2009",
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
              <Link href="/stories" className="text-red-400 font-medium">
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
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Story <span className="text-red-500">Archive</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore the complete collection of legendary creepypastas that defined internet horror culture.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search stories, authors, or keywords..."
                  className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="legendary">Legendary</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="psychological">Psychological</SelectItem>
                  <SelectItem value="nostalgia">Nostalgia</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48 bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card
                key={story.id}
                className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">{story.category}</Badge>
                    <div className="absolute top-4 right-4 flex items-center bg-black/70 rounded px-2 py-1 text-sm">
                      <Star className="h-3 w-3 text-yellow-400 mr-1 fill-current" />
                      <span className="text-white">{story.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-white group-hover:text-red-400 transition-colors">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4 line-clamp-2">{story.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {story.author}</span>
                    <span>{story.year}</span>
                  </div>
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3"
            >
              Load More Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
