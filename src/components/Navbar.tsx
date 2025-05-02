import { Box, Flex, Text, HStack, useToken } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWallet } from 'react-icons/fa';

const MotionText = motion(Text);

interface NavbarProps {
  wallet: number;
}

export default function Navbar({ wallet }: NavbarProps) {
  const [primary] = useToken('colors', ['brand.primary']);

  return (
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      bg="rgba(17, 17, 17, 0.9)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      zIndex={1000}
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
        py={4}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          bgGradient={`linear(to-r, ${primary}, white)`}
          bgClip="text"
        >
          Pluma
        </Text>

        <HStack spacing={2}>
          <FaWallet color={primary} size={20} />
          <AnimatePresence mode="wait">
            <MotionText
              key={wallet}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              fontWeight="bold"
              color={primary}
            >
              R$ {wallet.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </MotionText>
          </AnimatePresence>
        </HStack>
      </Flex>
    </Box>
  );
} 