"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import HeaderSection from "../components/navigation/HeaderSection";
import {
    Container,
    Title,
    List,
    ThemeIcon,
    Group,
    Divider,
    Grid,
    Card,
    Image,
    Text,
} from "@mantine/core";

export default function About() {
    const router = useRouter();

    return (
        <div className={styles.aboutContainer}>
            <HeaderSection />
            <div className={styles.content}>
            <h1 className={styles.subject}>Project Details</h1>
            <p>
                This is a Next.js project designed to provide a user-friendly
                interface for displaying and managing subject data. Built with
                modern technologies such as React, TypeScript, and Mantine.
            </p>
            </div>

            <div>
            <Title order={3} mb="sm">
                Technologies
            </Title>
            <List
                spacing="sm"
                size="md"
                center
                icon={<ThemeIcon color="teal" size={14} radius="xl"></ThemeIcon>}
            >
                <List.Item>Next.js</List.Item>
                <List.Item>React</List.Item>
                <List.Item>TypeScript</List.Item>
                <List.Item>Mantine</List.Item>
                <List.Item>PostCSS</List.Item>
            </List>
            </div>

            <div>
            <Title order={3} mb="sm">
                Features
            </Title>
            <Grid>
            {[
                { src: "/image/ProjectBoard.png", text: "Project Board" },
                { src: "/image/responsive.png", text: "Responsive Design" },
                { src: "/image/filter.png", text: "Filter & Search Options" },
                { src: "/image/sort.png", text: "Sorting Features" },
                { src: "/image/ProjectBoard", text: "Display a grid of subjects with their details" },
                { src: "/image/test.png", text: "Unit Testing" },
            ].map((item, index) => (
                <Grid.Col span={4} key={index}>
                <Card shadow="sm" padding="lg">
                    <Card.Section>
                    <Image
                        src={item.src}
                        height={400}
                        width={50}
                        alt={`Image ${index + 1}`}
                    />
                    </Card.Section>
                    <Text mt="md">{item.text}</Text>
                </Card>
                </Grid.Col>
            ))}
            </Grid>
            </div>
        </div>
    );
}
