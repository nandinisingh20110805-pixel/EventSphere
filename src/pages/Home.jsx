import { Button } from '@/components/ui/button'
import { ChevronRight, Flame, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FeaturedCarousal } from '@/components/FeaturedCarousal'
import axios from 'axios'

export const Home = () => {
    const [isLoading , setLoading] = useState(false)
    const [carouselEvents, setCarouselEvents] = useState([])

    useEffect(() => {
      async function getFeaturedEvents() {
        setLoading(true);
        try{
          let {
            //nested destructuring
            data : {data}} = await axios.get("https://eventsphere-server-mfdb.onrender.com/api/events/featured")
          setCarouselEvents(data);
        }
        catch(error){

        }
        finally{
          setLoading(false)
        }
      }
      getFeaturedEvents();
    },[])

  return (
    <div className='space-y-16 pt-10 pb-20'>
        <section className='relative pt-12 pb-6 sm:pt-16 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 border-b border-[#EBE8DF]">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#C2410C] border border-orange-200">
              <Sparkles className="w-3.5 h-3.5" /> India's Curated Community
              Conclaves
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111] leading-[1.08]">
              Extraordinary gatherings for curious minds.
            </h1>
              <p className="flex-1 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Discover verified developer summits, acoustic indie evenings,
              founder pitch conclaves, and art retreats across Kolkata, Bengaluru,
              Mumbai, and Delhi NCR.
              </p>
          </div>
          <div className='flex gap-3 justify-between items-center'>
            <Button
              variant='primary'
              size='md'
              >
                Explore gatherings
            </Button>
            <Button
            variant='link'
            size='md'
            >
                Create Event
            </Button>
          </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#E65100]" />
            <h2 className="text-xl font-bold text-stone-900 tracking-tight">
              Curated Spotlight
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-xs font-semibold text-[#E65100] hover:underline flex items-center gap-1"
          >
            Browse all <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {isLoading ? 
        (<div className='aspect-21/9 rounded-3xl bg-[#EBE8DF]/50 animate-pulse'/>) :
        (<FeaturedCarousal featuredEvents = {carouselEvents}/>)
        }

        </section>
    </div>
  )
}
