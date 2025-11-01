'use client';

import { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    content: '',
    company: '',
    position: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          rating: 0,
          content: '',
          company: '',
          position: ''
        });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const StarInput = () => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleRatingClick(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`w-8 h-8 ${
              star <= (hoverRating || formData.rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deixe seu Testemunho</CardTitle>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <Alert className="mb-6 bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Obrigado pelo seu testemunho! Ele será revisado antes de ser publicado.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert className="mb-6 bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-800">
            <AlertDescription className="text-red-800 dark:text-red-200">
              Ocorreu um erro ao enviar seu testemunho. Por favor, tente novamente.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Empresa (opcional)</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da empresa"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Cargo (opcional)</Label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Seu cargo"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Avaliação *</Label>
            <StarInput />
            <p className="text-sm text-gray-500">
              {formData.rating > 0 ? `${formData.rating} estrela${formData.rating > 1 ? 's' : ''}` : 'Selecione uma avaliação'}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Seu testemunho *</Label>
            <Textarea
              id="content"
              name="content"
              rows={4}
              value={formData.content}
              onChange={handleChange}
              placeholder="Compartilhe sua experiência trabalhando comigo..."
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || formData.rating === 0}
            className="w-full gap-2"
          >
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar Testemunho
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}