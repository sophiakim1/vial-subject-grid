"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import HeaderSection from "../components/navigation/HeaderSection";
import Link from "next/link";
import {
    Title,
    List,
    ThemeIcon,
    Grid,
    Card,
    Image,
    Text,
} from "@mantine/core";

export default function About() {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <HeaderSection />
            <div className={styles.container}>
                
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <Title order={1} mb="15px" className={styles.sectionHeader}>Project Details</Title>
                        <p className={styles.description}>
                            This is a Next.js project designed to provide a user-friendly
                            interface for displaying and managing subject data. Built with
                            modern technologies such as React, TypeScript, and Mantine.
                        </p>
                    </div>

                    <div className={styles.content}>
                        <Title order={2} mb="15px" className={styles.sectionHeader}>
                            Technologies
                        </Title>
                        <List
                            spacing="sm"
                            size="md"
                            center
                            icon={<ThemeIcon color="#c3dddd" size={12} radius="xl" aria-hidden="true"></ThemeIcon>}
                            className={styles.list}
                        >
                            <List.Item>Next.js</List.Item>
                            <List.Item>React</List.Item>
                            <List.Item>TypeScript</List.Item>
                            <List.Item>Mantine</List.Item>
                        </List>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.rightContent}>
                    <Title order={2} mb="15px"className={styles.sectionHeader}>
                        Features
                    </Title>
                    <Grid>
                    {[
                        { src: "/image/ProjectBoard.png", text: "Project Board" },
                        { src: "/image/responsive.png", text: "Responsive Design" },
                        { src: "/image/Filter.png", text: "Search by Names" },
                        { src: "/image/Sort.png", text: "Sorting Features" },
                        { src: "/image/scroll.png", text: "Filter Options" },
                        { src: "/image/test.png", text: "Unit Testing" },
                    ].map((item, index) => (
                        <Grid.Col span={4} key={index}>
                        <Card shadow="sm" padding="lg">
                            <Card.Section>
                            <Image
                                src={item.src}
                                height={200}
                                width={20}
                                alt={item.text}
                            />
                            </Card.Section>
                            <Text mt="md" size="sm" className={styles.listText}>{item.text}</Text>
                        </Card>
                        </Grid.Col>
                    ))}
                    </Grid>
                </div>
                </div>
            </div>
            
            <footer>
                <Link href="https://www.sophiakim.ca/" className={styles.footer}>Made by Sophia Kim</Link>
            </footer>
        </div>
    );
}
