
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

const DigiboothSEOSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Digibooth Photobooth | Digibooth by @dev.dietherdave</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Welcome to Digibooth, the innovative digital photobooth solution designed for creating professional-quality photo memories with cutting-edge technology. Our state-of-the-art photobooth experience combines user-friendly interfaces with powerful customization options, making it perfect for events of all sizes – from intimate gatherings to large-scale corporate functions. With Digibooth by @dev.dietherdave, you'll unlock the ability to capture high-resolution photos with stunning digital frames, filters, and effects that transform ordinary pictures into extraordinary memories.
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
                <span>{isOpen ? "Read less" : "Read more about Digibooth"}</span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="p-6 text-gray-700 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">The Digital Revolution in Photo Booth Technology</h3>
              <p>
                The traditional photo booth has undergone a remarkable transformation in the digital age. Digibooth represents the pinnacle of this evolution, offering features and capabilities that were unimaginable just a few years ago. Unlike conventional photo booths with physical limitations, Digibooth leverages advanced digital technology to provide endless customization options, superior image quality, and seamless social media integration – all while maintaining the fun, spontaneous spirit that makes photo booths a beloved attraction at any event.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Unmatched Customization Options</h3>
              <p>
                What truly sets Digibooth apart is its extensive range of customization features. Event planners and users can select from a diverse library of digital frames, filters, and stickers that can be tailored to match any theme or branding requirement. The border styles, frame colors, and visual effects can be adjusted in real-time, allowing for a truly personalized photo experience. Whether you're looking for elegant sophistication for a wedding or playful fun for a birthday celebration, Digibooth's versatile design tools can accommodate your vision.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Professional-Quality Results</h3>
              <p>
                At the heart of Digibooth is our commitment to exceptional image quality. Our system utilizes high-resolution cameras and advanced image processing technology to ensure that every photo captured is crystal clear and professionally finished. The precise color calibration and lighting adjustments automatically enhance each image, making everyone look their best without requiring professional photography skills. This attention to quality means your event photos will be treasured keepsakes, not just momentary amusements.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Seamless Social Integration</h3>
              <p>
                In today's connected world, the ability to instantly share experiences is paramount. Digibooth is designed with this in mind, offering easy-to-use sharing features that allow guests to immediately distribute their photos across social media platforms or via email. This functionality not only enhances the guest experience but also extends the reach of your event beyond the physical attendees, creating viral potential and broader engagement. For corporate events, this represents a powerful branding opportunity as your company's imagery spreads organically across digital networks.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Perfect for Every Occasion</h3>
              <p>
                Digibooth's flexibility makes it the ideal choice for a wide range of events. For weddings, it provides guests with an entertaining activity while creating personal mementos that complement professional photography. At corporate events, it serves as an engaging ice-breaker while reinforcing brand identity through customized frames and backgrounds. Birthday parties, graduations, reunions, and holiday celebrations are all enhanced by the interactive fun and lasting memories that Digibooth creates, making it a versatile addition to virtually any gathering.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Advanced Technical Capabilities</h3>
              <p>
                Behind Digibooth's user-friendly interface lies sophisticated technology that ensures a smooth, responsive experience. Our system incorporates real-time image processing, allowing users to preview effects before capturing their photos. The background removal feature uses advanced algorithms to isolate subjects from their surroundings, enabling creative compositing options. Additionally, our filter adjustment controls provide fine-tuning capabilities normally found only in professional photo editing software, all presented in an intuitive interface that users of all ages can master quickly.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Sustainable and Eco-Friendly Solution</h3>
              <p>
                Environmental consciousness is increasingly important in event planning, and Digibooth offers significant advantages in this regard. By emphasizing digital delivery of photos over traditional printing, we reduce paper consumption and chemical use associated with instant film development. When printing is desired, our system uses energy-efficient technology and eco-friendly materials. This sustainable approach allows event organizers to provide a premium photo experience while minimizing environmental impact – an important consideration for modern consumers and corporate social responsibility initiatives.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">The Psychology of Photo Experiences</h3>
              <p>
                The enduring popularity of photo booths is rooted in fundamental aspects of human psychology. They create a semi-private space that encourages self-expression and playfulness, even among typically reserved individuals. The anticipation of seeing the final images generates excitement, while the physical act of posing together strengthens social bonds. Digibooth enhances these psychological benefits by removing technical barriers and expanding creative possibilities, allowing users to fully immerse themselves in the experience rather than worrying about the mechanics of photography.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Cost-Effective Event Enhancement</h3>
              <p>
                While delivering premium features and experiences, Digibooth also represents an excellent value proposition for event planners. The digital nature of our system eliminates many of the ongoing expenses associated with traditional photo booths, such as film, paper, and chemical supplies. Additionally, the versatility of Digibooth means it can serve multiple functions at an event – from entertainment to branding to keepsake creation – reducing the need for separate vendors or activities. This multifunctionality, combined with operational efficiency, makes Digibooth a cost-effective enhancement for events with any budget.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Ongoing Innovation and Updates</h3>
              <p>
                The digital foundation of Digibooth enables continuous improvement and feature expansion. Our development team at @dev.dietherdave regularly releases updates that introduce new capabilities and refinements based on user feedback and emerging technologies. This means that your Digibooth experience keeps getting better over time, with new frames, effects, and functionalities added regularly. Unlike physical equipment that becomes obsolete, our digital platform evolves to incorporate the latest advancements in image processing, user interface design, and social media integration.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-6">Conclusion: Creating Lasting Digital Memories</h3>
              <p>
                Digibooth represents more than just a technological advancement in photo booth design; it's a reimagining of how we capture and share moments of connection and celebration. By combining sophisticated digital tools with an intuitive user experience, we've created a platform that enhances events while producing lasting, high-quality mementos. Whether you're planning a wedding, corporate function, or casual celebration, Digibooth by @dev.dietherdave provides the perfect balance of fun, creativity, and quality that makes every event memorable. Experience the future of photo booths today and discover why Digibooth is becoming the preferred choice for event planners and guests alike.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default DigiboothSEOSection;
