import React from 'react';

export const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-3xl prose prose-invert prose-stone">
        <h1 className="font-display text-4xl mb-12 text-white">Mentions Légales</h1>
        
        <section className="mb-10">
            <h2 className="text-gold-500 font-serif text-2xl mb-4">Éditeur du site</h2>
            <p className="text-stone-300">
                Le site Maison Vigneron est édité par la société VINS PRESTIGE SAS, au capital de 50 000 euros.<br/>
                Siège social : 12 Route des Grands Crus, 69000 Lyon, France.<br/>
                RCS Lyon B 123 456 789.<br/>
                Directeur de la publication : Pierre Lefranc.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-gold-500 font-serif text-2xl mb-4">Hébergement</h2>
            <p className="text-stone-300">
                Ce site est hébergé par Vercel Inc.<br/>
                340 S Lemon Ave #4133 Walnut, CA 91789, USA.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-gold-500 font-serif text-2xl mb-4">Protection des mineurs</h2>
            <p className="text-stone-300">
                Conformément à l'article L. 3342-1 du Code de la santé publique, la vente d'alcool à des mineurs de moins de dix-huit (18) ans est interdite. L'acheteur s'engage à avoir 18 ans révolus au moment de la commande.
            </p>
        </section>

        <section className="mb-10">
            <h2 className="text-gold-500 font-serif text-2xl mb-4">Propriété Intellectuelle</h2>
            <p className="text-stone-300">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
        </section>
      </div>
    </div>
  );
};
