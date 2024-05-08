"use client";

import { useEffect, useState, useRef } from "react";
import Cx from "classNames";
import AsciiArt from "@/components/AsciiArt";
import DIRECTORIES_LIST, { META_DATA} from '@/constants/common';
import type { Message, MessagesType } from '@/types/common.types';
import { HelpComponent } from "@/components/HomeComponent";
// either Static metadata

export default function TerminalComponents() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentCommand, setCurrentCommand] = useState("");
  const [messages, setMessages] = useState<MessagesType>([]);
  const [currentDirectory, setCurrentDirectory] = useState("home");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  const executeCommand = (command: string) => {
    if(command === "help") {
      setMessages((prev) => [
        ...prev,
        { selectedCommand: command, message: "" },
      ]);
      return;
    }
    if (command === "clear") {
      setMessages([]);
      setCurrentCommand("");
      setCurrentDirectory("home");
      return;
    }
    if (command === "cd ..") {
      setCurrentDirectory("home");
      setMessages((prev) => [
        ...prev,
        { selectedCommand: command, message: "" },
      ]);
      setCurrentCommand("");
      return;
    }
    const output: Message = { selectedCommand: command, message: "" };

    if (command === "ls") {
      console.log({ currentDirectory });
      output.Component =
        currentDirectory === "home"
          ? DIRECTORIES_LIST.component
          : DIRECTORIES_LIST[currentDirectory].component;
    } else if (command.startsWith("cd ")) {
      const dir = command.substring(3).trim();
      if (DIRECTORIES_LIST[dir]) {
        setCurrentDirectory(dir);
      } else {
        output.message = `no such file or directory: ${command}`;
      }
    } else {
      output.message = `command not found: ${command}`;
    }

    setMessages((prev) => [...prev, output]);
    setCurrentCommand("");
  };
  const focusOnInput = () => inputRef.current?.focus();
  return (
    <main className="flex min-h-screen flex-col " onClick={focusOnInput}>
      <div className="gradient-text font-medium text-2xl text-transparent animate-gradient">
        <AsciiArt />
      </div>
      <div className="pl-14 pb-3 -translate-y-4 text-xl">
        <p>Welcome To My Terminal Portfolio</p>
        <p>Available Commands: ls, cd, clear, cd ..</p>
      </div>
      <div ref={containerRef} className="pl-14 h-[60vh] overflow-y-auto no-scrollbar ">
        {messages.map((message, index) => (
          <div
            key={index}
            className={Cx("text-green-700", {
              "mb-2": index !== messages.length - 1,
            })}
          >
            Ali Alizada:~ {currentDirectory !== "home" && currentDirectory}${" "}
            <div>{message.message}</div>
            {message.selectedCommand === "help" && <HelpComponent />}
            {message.Component && <message.Component />}
          </div>
        ))}
        <div className="text-green-700">
          <div>
            Ali Alizada:~/ {currentDirectory !== "home" && currentDirectory}${" "}
            <input
              autoFocus
              ref={inputRef}
              value={currentCommand}
              className="bg-transparent outline-none pl-2"
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                executeCommand(currentCommand.toLowerCase())
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
}