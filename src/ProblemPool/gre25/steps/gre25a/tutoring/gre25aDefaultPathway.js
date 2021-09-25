var hints = [{id: "gre25a-h1", type: "hint", dependencies: [], title: "GCF of Terms", text: "Find the greatest common factor of all the terms of the polynomial.", variabilization: {}}, {id: "gre25a-h2", type: "hint", dependencies: ["gre25a-h1"], title: "Factor into Primes", text: "Factor $$\\left(12\\right) x$$ and 60 into primes. $$\\left(12\\right) x=\\left(2\\right) \\left(2\\right) \\left(3\\right) x$$ $$60=\\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(5\\right)$$", variabilization: {}}, {id: "gre25a-h3", type: "hint", dependencies: ["gre25a-h2"], title: "Multiply Common Factors", text: "Multiply the terms shared by both expressions. $$GCF=\\left(2\\right) \\left(2\\right) \\left(3\\right)$$ $$GCF=12$$", variabilization: {}}, {id: "gre25a-h4", type: "hint", dependencies: ["gre25a-h3"], title: "Write each Term as a Product using GCF", text: "Rewrite $$\\left(12\\right) x$$ and 60 as products of their GCF, 12. $$\\left(12\\right) x-\\left(60\\right)$$ $$\\left(12\\right) x-\\left(12\\right) \\left(5\\right)$$", variabilization: {}}, {id: "gre25a-h5", type: "hint", dependencies: ["gre25a-h4"], title: "Reverse Distributive Property", text: "Use the reverse Distributive Property to factor the expression. $$\\left(12\\right) \\left(x-\\left(5\\right)\\right)$$", variabilization: {}}, ]; export {hints};