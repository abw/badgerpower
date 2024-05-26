# Badger Power

This is the source for the https://badgerpower.com/ web site.

# Checkout

Checkout the repository.

```bash
$ git clone https://github.com/abw/badgerpower.git
```

Checkout the git submodules.

```bash
$ git submodule init
$ git submodule update
```

# Install

Install the dependencies

```bash
$ pnpm install
```

# Development

Run the site in development mode.

```bash
$ pnpm dev
```

# Production Setup

Run the `bin/setup.js` script and answer the questions.

```bash
$ bin/setup.js
```

Run the `bin/scaffold.js` to scaffold local configuration files.

```bash
$ bin/scaffold.js
```

# Apache Configuration

The scaffolding process creates Apache configuration files.  You'll need
to create a symbolic link from your Apache directory
(e.g. `/etc/apache/sites-enabled`) to the `etc/vhost.conf` file.