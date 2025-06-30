'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function PaginaCalculadora() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [operacao, setOperacao] = useState("")

  return(
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-5">Página da Calculadora</h1>
        <form action="" className="flex flex-col gap-4 w-full max-w-xs">
          <Input 
            type="number"
            placeholder="Primeiro número"
            value={numero1}
            onChange={e => setNumero1(e.target.value)}
            required
          />
          <Select value={operacao} onValueChange={setOperacao} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione a operação" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={1} value={'Somar'}>{'Somar'}</SelectItem>
            <SelectItem key={2} value={'Subtrair'}>{'Subtrair'}</SelectItem>
            <SelectItem key={3} value={'Multiplicar'}>{'Multiplicar'}</SelectItem>
          </SelectContent>
        </Select>
          <Input 
            type="number"
            placeholder="Segundo número"
            value={numero2}
            onChange={e => setNumero2(e.target.value)}
            required
          />
          <Button>Realizar operação</Button>
        </form>
      </div>
    </>
  )
}