
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const HomepageSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pica Photobooth | Pica Pica Photo Booth</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to Pica Photobooth, your ultimate digital photo experience combining cutting-edge technology with creative personalization. Our innovative platform transforms ordinary moments into extraordinary memories through customizable frames, filters, and interactive features. Whether you're celebrating special occasions or just having fun with friends, Pica Pica Photo Booth delivers professional-quality photos with the perfect blend of sophistication and playfulness that will keep your memories vibrant for years to come.
          </p>
          
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className={cn(
              "rounded-md border border-gray-200 bg-white shadow-sm transition-all",
              isOpen ? "mt-6" : "mt-2"
            )}
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full flex justify-between items-center py-2 px-4 bg-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{isOpen ? "Read less" : "Read more about Pica Photobooth"}</span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="p-6 text-gray-700 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Revolutionizing Photo Experiences for All Occasions</h3>
              <p>
                Pica Photobooth represents the next generation of photo capture technology, designed to elevate any event from ordinary to extraordinary. Our innovative platform combines the spontaneity and fun of traditional photo booths with the flexibility and creative possibilities of digital technology. Whether you're planning a wedding, corporate event, birthday celebration, or casual gathering, our solution adapts seamlessly to create the perfect photographic atmosphere. The intuitive interface ensures guests of all ages can participate, while our extensive customization options allow event hosts to create truly personalized experiences that reflect their unique vision and style.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Exceptional Photo Quality Through Advanced Technology</h3>
              <p>
                At the heart of Pica Pica Photo Booth is our commitment to exceptional image quality. We utilize professional-grade imaging technology that captures every detail with stunning clarity and vibrant color reproduction. Our proprietary lighting algorithms automatically adjust to environmental conditions, ensuring perfect exposure regardless of venue lighting challenges. The result is magazine-quality images that look as good printed as they do shared digitally. For those seeking even more refinement, our premium filters offer subtle enhancements that flatter subjects without appearing artificial, striking the perfect balance between enhancement and authenticity that both casual users and photography enthusiasts appreciate.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Unlimited Creative Customization Options</h3>
              <p>
                What truly sets Pica Photobooth apart is our vast library of customization options. With hundreds of borders, frames, and overlays ranging from elegant to whimsical, users can find the perfect aesthetic for any occasion. Our extensive collection of digital props and stickers eliminates the hygiene concerns and limited options of physical prop boxes while offering endless creative possibilities. Background removal technology allows subjects to transport themselves into fantastical scenes or branded environments, while our text and typography tools enable personalized messages that commemorate specific dates, events, or themes. This unparalleled level of personalization ensures that no two Pica Photobooth experiences are ever quite the same.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Seamless Social Integration for the Digital Age</h3>
              <p>
                Understanding the importance of shareability in today's connected world, we've designed Pica Pica Photo Booth with comprehensive social media integration. Users can instantly share their creations across all major platforms with a single tap, extending the reach and impact of event photos. Our custom event hashtag feature automatically tags uploads, creating a centralized digital album that all attendees can enjoy. For corporate clients, this functionality provides valuable brand exposure as branded photos circulate organically through attendees' networks. The immediate gratification of instant sharing, combined with options to download high-resolution copies for printing, ensures that memories are both preserved and celebrated in whatever format users prefer.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Versatile Applications Across Event Types</h3>
              <p>
                The adaptability of Pica Photobooth makes it suitable for an impressive range of applications. For weddings, our elegant templates and customizable monograms create treasured keepsakes that complement professional photography. Corporate events benefit from branded templates that reinforce company identity while providing networking opportunities and entertainment. Educational institutions use our platform for graduation celebrations and school events, creating memorable ways to mark academic milestones. Even healthcare organizations have found creative applications, using customized Pica Photobooths to reduce anxiety in waiting rooms or celebrate recovery milestones. This versatility demonstrates how our intuitive photo experience enhances virtually any gathering where memories are being made.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Eco-Friendly Alternative to Traditional Photo Services</h3>
              <p>
                As sustainability becomes increasingly important, Pica Photobooth offers significant environmental advantages over traditional photo booth services. By leveraging digital technology, we drastically reduce the consumption of paper, chemicals, and disposable materials associated with conventional photo printing. Users can choose to keep their creations entirely digital, or selectively print only their favorites, minimizing waste without sacrificing the photo booth experience. For environmentally conscious clients, this represents a meaningful way to reduce the ecological footprint of their events while still providing guests with memorable keepsakes. Our commitment to sustainability extends to our business practices as well, with carbon-neutral hosting for all our cloud services.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Enterprise-Grade Security and Privacy Protection</h3>
              <p>
                In an era of increasing privacy concerns, we've made security a foundational element of the Pica Pica Photo Booth experience. All photos captured through our platform are protected with enterprise-grade encryption during transmission and storage. Our privacy-first design gives users complete control over their images, with intuitive consent management for sharing and storage options. For corporate events, additional security features like expiring links and watermarking capabilities protect sensitive information and brand assets. These robust protections ensure peace of mind for both event organizers and participants, knowing that their photographic memories remain securely in their control while still enabling the joy of sharing with intended audiences.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Continuous Innovation Through User Feedback</h3>
              <p>
                The evolution of Pica Photobooth is guided by our commitment to continuous improvement based on user feedback. Our active community of event planners, photography enthusiasts, and casual users provides invaluable insights that shape our development roadmap. Recent innovations born from this process include our AI-powered composition suggestions, which help users create visually balanced photos, and our augmented reality filters that respond to facial expressions and movements. This collaborative approach to innovation ensures that Pica Photobooth remains at the cutting edge of photo technology while addressing the practical needs and creative desires of our diverse user base. Each update brings new possibilities without compromising the intuitive simplicity that makes our platform accessible to everyone.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Analytics and Insights for Event Organizers</h3>
              <p>
                For event professionals and corporate clients, Pica Photobooth offers powerful analytics capabilities that go beyond simple photo creation. Our comprehensive dashboard provides insights into guest engagement, popular frame choices, peak usage times, and sharing statistics. These metrics help organizers quantify the impact of their photo booth investment and gain valuable information about attendee preferences and behavior. For recurring events, comparative analytics track trends over time, enabling continuous refinement of the guest experience. Marketing teams particularly value our sentiment analysis feature, which evaluates facial expressions and poses to gauge emotional responses, providing a unique window into event success that complements traditional feedback methods.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Accessible Design for Universal Participation</h3>
              <p>
                Inclusivity is a core value at Pica Photobooth, reflected in our commitment to accessible design. Our interface incorporates voice commands, screen reader compatibility, and adjustable text sizing to accommodate users with different abilities. The physical setup recommendations we provide event organizers include guidelines for wheelchair accessibility and appropriate lighting for users with visual sensitivities. Language support for over 20 languages ensures that international events and diverse gatherings can enjoy the full Pica Pica Photo Booth experience without communication barriers. These thoughtful accommodations ensure that creating and sharing photo memories is an opportunity open to all guests, regardless of their individual needs or backgrounds.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Professional Support for Flawless Execution</h3>
              <p>
                Behind every successful Pica Photobooth implementation is our dedicated support team, committed to ensuring flawless execution for events of all sizes. From pre-event consultations that help clients select the perfect customization options to technical support during the event, our experienced professionals anticipate needs and resolve potential issues before they impact the guest experience. For large-scale or high-profile events, our premium support package includes dedicated event specialists who can provide on-site assistance and real-time adjustments. This comprehensive support structure gives event planners confidence that the photo booth experience will meet and exceed expectations, allowing them to focus on other aspects of event management with the assurance that memorable photos are in capable hands.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion: Creating Tomorrow's Memories Today</h3>
              <p>
                Pica Photobooth stands at the intersection of technology and creativity, providing a photo capture solution that honors the nostalgia of traditional photo booths while embracing the possibilities of digital innovation. Our platform transforms ordinary moments into extraordinary memories, giving users the tools to express their personalities, commemorate special occasions, and share experiences in ways that feel both contemporary and timeless. In a world where photos have become more numerous but often less meaningful, Pica Pica Photo Booth recaptures the magic of thoughtfully created images that tell stories and preserve emotions. Whether you're planning your next corporate event, celebrating a milestone, or simply gathering with friends, discover how our platform can elevate your photo experience from simple snapshots to treasured memories that last a lifetime.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default HomepageSEOSection;
