import React from 'react'
import { HeroSection, OurTeam,AllToursLarge } from '@/components/shared'
import { Button } from '@/components/ui'
import { AboutUsHeroImg, AboutUsDes, OurGlobalFamliyAboutUs, TeamMemberImg1, TeamMemberImg2, TeamMemberImg3, TeamMemberImg4, TeamMemberImg5, TeamMemberImg6, TeamMemberImg7 } from '@/assets'
import Image from 'next/image'
function AboutUs() {
    const HeroSectionDetails = {
        title: 'About Us',
        paraText: 'We’re a small team of people who are passionate about travel. Our goal is to create unique, inspiring, and thoughtful tours that surprise and delight you. We’re just as excited as you are about travel and we make it our mission to ensure that on one of our tours, you’re thrilled from start to finish!',
        ImgUrl: AboutUsHeroImg,
    }

    const ourTeam = [
        {
            imgUrl: TeamMemberImg1,
            p1: 'Travel is basically all I know. After graduating university in 1999, I took a 3 month trip to Southeast Asia but I decided that 3 months wasn’t enough and I’ve been traveling all over the world ever since.',
            p2: 'In 2010, I started the travel blog, WanderingEarl.com, to share my thoughts about what I was experiencing. By 2012, I was receiving regular emails from readers asking me to organize trips to some of my favorite countries.',
            p3: 'And so I did.',
            p4: 'What started off as 1 trip to India back in 2012, has now become a long list of awesome Wandering Earl Tours each year, with new destinations and itineraries being added all the time!',
            name: 'Derek Baron',
            position: 'CEO',
            Direction: 'flex-row',
        },
        {
            imgUrl: TeamMemberImg2,
            p1: 'Travel has always been my greatest passion. I’ve worked in different countries since I was 18, going on adventures in Europe and Africa, volunteering in Canada and even working on a cruise ships so that I could get paid to travel.',
            p2: 'I always focus on enjoying the simple things in life, such as an aimless wander around a new place, watching a beautiful sunset, people-watching and sharing a smile with anyone that crosses my path.',
            p3: 'As a Tour Manager at Wandering Earl Tours, I get excited every time someone books a trip, as I love to play a role in helping our guests achieve one of their travel goals!',
            name: 'Elizabeth Aceves',
            position: 'Tour Manager',
            Direction: 'flex-row-reverse',
        },
        {
            imgUrl: TeamMemberImg3,
            p1: 'Since I was a little kid, I had a deep connection with stories about adventurers. I heard about people that had gone to deserts with dunes taller than skyscrapers, to cities where people needed boats to go from one house to another, and of forests with trees as far as the eye can see.',
            p2: 'All of the decisions I made since then have been directed to travel, and so here I am, being a full-time digital nomad, traveling to all of the places I had once only heard of. I am now an adventurer of sorts, and I wouldn’t change it for anything. Now, I can not only achieve this dream for myself, but working with Wandering Earl Tours has helped me bring this dream to others, which I’m extremely happy about! ',
            name: 'Ivan Radchik',
            position: 'Tour Director',
            Direction: 'flex-row',
        },
        {
            imgUrl: TeamMemberImg4,
            p1: 'With over 20 years of travel experience and almost as many years of guiding around the world, I’m ALWAYS prepared for any kind of adventure, even on a minute’s notice. From Vietnam to Morocco, Jordan to Cambodia, Egypt to Indonesia and so many unbelievable destinations in between…just name a place and I’m ready to go!',
            p2: 'The way I see it – the more we travel, the deeper connection we have with our planet and all the cultures that exist, leading to more sustainable choices to ensure it all survives.',
            p3: 'I’ve been leading small group trips for Wandering Earl Tours for the past 7 years, in Morocco, Jordan, Egypt, India, SE Asia and more!',
            name: 'Sakai Naismith',
            position: 'Tour Leader',
            Direction: 'flex-row-reverse',
        },
        {
            imgUrl: TeamMemberImg5,
            p1: 'I first traveled overseas after graduating high school and I haven’t stopped!  I’ve traveled to 49 states and over 70 countries (I am still missing Ohio!). After working in restaurant and retail management for many years I decided it was time to fulfill my dream of traveling. I packed up all my belongings, sold my house and embarked on a 13+ month trip around the world. ',
            p2: 'After running into a tour group on a small island in southern Laos, I filed it away thinking that would be a great job. When I came back to the US, I then applied to be a tour leader. Six months later I was in Vietnam training for my dream job.',
            p3: 'This career has taken me to all corners of the globe and I now love working for Wandering Earl and sharing my passion for travel with everyone on these trips',
            name: 'Dara Leonard',
            position: 'Tour Leader',
            Direction: 'flex-row',
        },
        {
            imgUrl: TeamMemberImg6,
            p1: 'It is no secret to those who know me that I am the happiest while on the road! I studied tourism in college and I’ve worked for more than 12 years in the tourism industry, only to discover that tour leading is one of my favorite things to do!',
            p2: 'I seek adventure when I travel and I always find ways to get out of my comfort zone. I have lived in several cities across four continents, and I am not planning to stop discovering our beautiful world, learning about new cultures, speaking different languages and blending in with locals.',
            p3: 'I’ve lead tours in Africa, Europe, the Middle East and more, and I genuinely look forward to seeing happy faces while in the unique destinations we travel to on Wandering Earl tours!',
            name: 'Luna Rodriguez',
            position: 'Tour Leader',
            Direction: 'flex-row-reverse',
        },
        {
            imgUrl: TeamMemberImg7,
            p1: 'I am happiest when I’m outside and on an adventure! Travel is truly my greatest passion and when I’m not on a trip, I’m dreaming of the next one. From spending months backpacking through Europe and Southeast Asia to taking countless road trips around North America, I always try to find exciting ways to get off the beaten path and immerse myself in each destination.',
            p2: 'I believe unique and meaningful experiences are essential elements of any successful trip and work hard to ensure all guests leave our tours feeling the same.',
            p3: 'Some of my favorite things include photography, cycling, and spending time in nature. I’m also easily excited by anything related to food – especially spicy Thai meals and delicious local beers!',
            name: 'Stephanie Lange',
            position: 'Tour Leader',
            Direction: 'flex-row',
        },
    ]
    return (
        <>
            <div className='relative flex flex-col gap-10 md:gap-15 lg:gap-20'>

                {/* Hero + After */}
                <div>
                    {/* Background Gradient with Blur */}
                    <div
                        className="absolute inset-0 -z-10 w-full h-full"
                        style={{
                            height: '115vh',
                            background: 'linear-gradient(180deg, #1E365C 0%, #1E365C 50.5%, rgba(30, 54, 92, 0.15) 100%)',
                        }}
                    />

                    {/* Hero Section */}
                    <div className='px-5 relative z-10'>
                        <HeroSection
                            title={HeroSectionDetails.title}
                            paraText={HeroSectionDetails.paraText}
                            subText={HeroSectionDetails.subText}
                            ImgUrl={HeroSectionDetails.ImgUrl}
                        />
                    </div>

                    {/* After hero section */}
                    <div className='px-5 md:px-10 lg:px-15 xl:px-25 flex flex-col items-center lg:flex-row gap-10'>
                        {/* Text */}
                        <div className='w-full lg:w-1/2 text-Black'>
                            <p>Our team at Wandering Earl Tours has a strong desire to bring rich cultural connections around the world to people who would appreciate them the most. And we hold this mission at the core of everything we do</p>
                            <p>Focused, purposeful and incredibly rewarding trips are the goal, and each member of our team brings their own insights, skills and enthusiasm to the table. When combined, our goal is achieved, with unique Wandering Earl Tours that we are all genuinely excited to offer!</p>
                        </div>

                        {/* Img */}
                        <div className='w-full lg:w-1/2'>
                            <Image
                                src={AboutUsDes}
                                alt='About us Des'
                            />
                        </div>
                    </div>
                </div>

                {/* Our Glocal Family */}
                <div className='flex flex-col lg:flex-row items-center gap-1 bg-Secondary w-full'>
                    <div className='w-full lg:w-1/2 px-5 py-5 md:px-8 md:py-10 lg:px-10 lg:py-15'>
                        <h3 className='text-White font-extrabold text-2xl md:text-3xl lg:text-4xl'>Get In Touch</h3>
                        <p className='text-White text-md lg:text-[16px] mt-2 mb-4'>Our team also consists of our incredible travel partners, friends and endless local contacts in every country where we operate. These wonderful people work extremely hard to help us create and run our unique trips. We could not do this without all of them as it takes such a dedicated and global team to create our rewarding travel experiences!</p>
                        <div>
                            <Button varient='default' size='lg'>Contact us Today</Button>
                        </div>
                    </div>

                    <div className='hidden lg:flex w-full h-full lg:w-1/2'>
                        <Image src={OurGlobalFamliyAboutUs}
                            alt='Our Global Famliy AboutUs'
                            className='rounded-tl-[1821px] rounded-bl-[795px]' />
                    </div>

                </div>

                {/* Our Team */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 flex flex-col gap-10'>
                    <div className='text-Black font-extrabold text-center text-2xl md:text-3xl lg:text-4xl'>
                        <h1>Our <span className='text-Secondary'>Team</span></h1>
                    </div>
                    <div>
                        {ourTeam.map((member, index) => (
                            <OurTeam
                                key={index}
                                imgUrl={member.imgUrl}
                                p1={member.p1}
                                p2={member.p2}
                                p3={member.p3}
                                p4={member.p4}
                                name={member.name}
                                position={member.position}
                                Direction={member.Direction}
                            />
                        ))}

                    </div>
                </div>

                {/* TOURS LARGE */}
                <div className='px-5 md:px-10 lg:px-15 xl:px-25 mb-3'>
                    <AllToursLarge title="Tours" />
                </div>


            </div>
        </>
    )
}

export default AboutUs
