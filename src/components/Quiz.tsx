import { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
  Container,
  Heading,
  useToast,
  Progress,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const MotionBox = motion(Box);

interface QuizStep {
  title: string;
  description: string;
  type: 'welcome' | 'instagram' | 'question' | 'result' | 'thanks';
  options?: string[];
}

const REWARD_PER_QUESTION = 147.00;

const quizSteps: QuizStep[] = [
  {
    title: 'Você acabou de ativar uma estrutura diferente de tudo que você já viu.',
    description: 'Não clicou numa VSL. Não caiu em promessa de 5 dígitos em 7 dias.\nVocê entrou num Funil com Gamificação estratégica.',
    type: 'welcome',
  },
  {
    title: 'Digite seu Instagram para continuar:',
    description: 'Aqui cada clique seu vira dopamina pro lead. Cada passo seu já é engenharia de conversão.',
    type: 'instagram',
  },
  {
    title: 'Qual é o seu faturamento mensal atual?',
    description: 'Escolha a opção que mais se aproxima da sua realidade:',
    type: 'question',
    options: [
      'Ainda não faturo',
      'Até R$ 5.000',
      'Entre R$ 5.000 e R$ 10.000',
      'Entre R$ 10.000 e R$ 30.000',
      'Mais de R$ 30.000'
    ],
  },
  {
    title: 'Qual é o seu maior desafio no marketing digital?',
    description: 'Selecione o que mais te impede de crescer:',
    type: 'question',
    options: [
      'Atrair leads qualificados',
      'Converter vendas',
      'Criar conteúdo que engaja',
      'Escalar o negócio',
      'Definir estratégias'
    ],
  },
  {
    title: 'Quanto tempo você dedica ao marketing do seu negócio?',
    description: 'Seja sincero, isso vai impactar sua estratégia:',
    type: 'question',
    options: [
      'Menos de 1 hora por dia',
      '1-2 horas por dia',
      '2-4 horas por dia',
      'Mais de 4 horas por dia',
      'Tenho uma equipe dedicada'
    ],
  },
  {
    title: 'Qual ferramenta você mais usa para marketing?',
    description: 'Escolha a principal:',
    type: 'question',
    options: [
      'Instagram',
      'Facebook',
      'Google Ads',
      'Email Marketing',
      'LinkedIn'
    ],
  },
  {
    title: 'Qual é seu objetivo principal para os próximos 6 meses?',
    description: 'Selecione a meta mais importante:',
    type: 'question',
    options: [
      'Dobrar o faturamento',
      'Automatizar processos',
      'Construir uma comunidade',
      'Lançar um novo produto',
      'Expandir para novos mercados'
    ],
  },
  {
    title: 'Parabéns! Você está pronto para transformar seu marketing!',
    description: 'Com base nas suas respostas, preparamos uma estratégia personalizada para você multiplicar seus resultados.',
    type: 'result',
  },
  {
    title: 'Obrigado por participar!',
    description: 'Seu relatório estratégico está sendo gerado. Em breve entraremos em contato pelo Instagram para apresentar sua análise personalizada.',
    type: 'thanks',
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [instagram, setInstagram] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [wallet, setWallet] = useState(0);
  const toast = useToast();

  const totalSteps = quizSteps.length;
  const progress = (currentStep / (totalSteps - 1)) * 100;

  const addReward = () => {
    setWallet(prev => {
      const newValue = prev + REWARD_PER_QUESTION;
      toast({
        title: '+ R$ 147,00',
        description: 'Você ganhou uma recompensa!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
      });
      return newValue;
    });
  };

  const handleInstagram = () => {
    if (!instagram) {
      toast({
        title: 'Digite seu Instagram',
        status: 'error',
        duration: 2000,
      });
      return;
    }
    addReward();
    setCurrentStep(prev => prev + 1);
  };

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    addReward();
    setCurrentStep(prev => prev + 1);
  };

  const renderStep = () => {
    const step = quizSteps[currentStep];

    switch (step.type) {
      case 'welcome':
        return (
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="lg" color="brand.primary">{step.title}</Heading>
            <Text whiteSpace="pre-line">{step.description}</Text>
            <Button variant="primary" onClick={() => setCurrentStep(prev => prev + 1)}>
              Começar a operação
            </Button>
          </VStack>
        );

      case 'instagram':
        return (
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="lg">{step.title}</Heading>
            <Text>{step.description}</Text>
            <Input
              placeholder="Seu Instagram (@seuinstagram)"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              size="lg"
              maxW="400px"
            />
            <Button variant="primary" onClick={handleInstagram}>
              Continuar
            </Button>
          </VStack>
        );

      case 'question':
        return (
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="lg">{step.title}</Heading>
            <Text>{step.description}</Text>
            <VStack spacing={4} w="100%" maxW="600px">
              {step.options?.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  w="100%"
                  onClick={() => handleAnswer(option)}
                  _hover={{
                    bg: 'brand.primary',
                    color: 'brand.dark'
                  }}
                >
                  {option}
                </Button>
              ))}
            </VStack>
          </VStack>
        );

      case 'result':
        return (
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="lg" color="brand.primary">{step.title}</Heading>
            <Text>{step.description}</Text>
            <Button variant="primary" size="lg" onClick={() => setCurrentStep(prev => prev + 1)}>
              Ver análise completa
            </Button>
          </VStack>
        );

      case 'thanks':
        return (
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="lg" color="brand.primary">{step.title}</Heading>
            <Text>{step.description}</Text>
            <Text fontSize="sm" color="gray.400">
              Fique de olho na sua DM! 🚀
            </Text>
          </VStack>
        );
    }
  };

  return (
    <Box minH="100vh" bg="brand.dark">
      <Navbar wallet={wallet} />
      <Container maxW="container.md" py={20}>
        {currentStep > 0 && currentStep < totalSteps - 1 && (
          <Progress
            value={progress}
            size="sm"
            colorScheme="green"
            bg="gray.700"
            mb={8}
            borderRadius="full"
          />
        )}
        <AnimatePresence mode="wait">
          <MotionBox
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderStep()}
          </MotionBox>
        </AnimatePresence>
      </Container>
    </Box>
  );
} 